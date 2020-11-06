const Sequelize = require('sequelize');

//this makes links to the .env file that allows us to safely hide our password and username
require('dotenv').config();

//create connection and pass mysql info into it
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;