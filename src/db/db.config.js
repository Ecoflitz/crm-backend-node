require('dotenv').config();
module.exports = {
  production: {
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: console.log,
    seederStorage: 'sequelize',
  },
  development: {
    username: 'root',
    dialect: 'mysql',
    password: '',
    database: 'db_pos',
    host: process.env.DB_HOST || 'localhost',
    logging: console.log,
    seederStorage: 'sequelize',
  },
  dev_stage: {
    dialect: 'mysql',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: console.log,
    seederStorage: 'sequelize',
  },
};
