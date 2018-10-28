exports.up = function (knex) {
  return knex.schema.createTable('user', function (t) {
    t.increments('id').primary()
    t.string('username').notNullable()
    t.string('password').notNullable()
    t.string('Name').notNullable()
    t.string('dept').notNullable()
    t.string('uni').notNullable()
    t.string('mail').notNullable()
    t.timestamps(false, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user')
}
