const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))

module.exports = {
  createUser ({ username, password, Name, dept, uni, mail, category1, category2}) {
    console.log(`Add user ${username}`)
    const { salt, hash } = saltHashPassword({ password })
    if(form.category[0].checked == true)
    return knex('user').insert({
      salt,
      encrypted_password: hash,
      username
      
    })

    else 
    return knex('prof').insert({
      salt,
      encrypted_password: hash,
      username
    }) 
  },
  authenticate ({ username, password, category1, category2}) {
    console.log(`Authenticating user ${username}`)
    if(category1)
      return knex('user').where({ username })
      .then(([user]) => {
        if (!user) return { success: false }
        const { hash } = saltHashPassword({
          password,
          salt: user.salt
        })
        return { success: hash === user.encrypted_password }
      })
     
    else
       return knex('prof').where({ username })
      .then(([prof]) => {
        if (!prof) return { success: false }
        const { hash } = saltHashPassword({
          password,
          salt: prof.salt
        })
        return { success: hash === prof.encrypted_password }
      })
  }
   
}

function saltHashPassword ({
  password,
  salt = randomString()
}) {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}

function randomString () {
  return crypto.randomBytes(4).toString('hex')
}
