const Sequelize = require('sequelize');

module.exports = new Sequelize('DB27', 'sa', '12345', {
  host: 'localhost',
  dialect:'mssql'
});
