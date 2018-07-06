module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'hris-practice-dev',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'CrimsonVeiled19',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      operatorsAliases: false
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}