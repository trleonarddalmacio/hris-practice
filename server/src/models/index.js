const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password, {
    dialect: process.env.DIALECT || 'mysql',
    host: process.env.HOST || 'localhost',
    port: 3306
  }, config.db.options
)

sequelize.authenticate()
  .then(() => {
    console.log("Database Connected...");
  })
  .catch(()=> {
    console.log("Something went wrong when connecting to database.")
  })
  .done();

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  });

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db