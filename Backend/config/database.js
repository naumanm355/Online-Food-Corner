//database.js file
const Sequelize = require('sequelize');

module.exports = new Sequelize('Labb', 'sa', '12345', {
  host: 'localhost',
  dialect:'mssql'
});
