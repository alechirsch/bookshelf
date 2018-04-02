module.exports = {
  mysql: {
    database: 'bookshelf_test',
    user: 'root',
    encoding: 'utf8'
  },

  postgres: {
    user: 'alechirsch',
    database: 'bookshelf_test',
    password: '',
    host: 'localhost',
    port: 5432,
    charset: 'utf8',
    ssl: false
  },

  sqlite3: {
    filename: ':memory:'
  }
};