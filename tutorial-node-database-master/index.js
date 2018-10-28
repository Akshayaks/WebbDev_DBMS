const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password,
      Name: req.body.Name,
      dept: req.body.dept,
      uni: req.body.uni,
      mail: req.body.mail,
      category1: req.body.category1,
      category2: req.body.category2
    })
    .then(() => res.sendStatus(200))
})
app.post('/login', (req, res) => {
  store
    .authenticate({
      username: req.body.username,
      password: req.body.password,
      category1: req.body.category1,
      category2: req.body.category2
    })
    .then(({ success }) => {
      if (success) res.sendStatus(200)
      else res.sendStatus(401)
    })
})
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})
