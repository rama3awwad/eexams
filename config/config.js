require('dotenv').config();

const config = {
  development: {
    database: process.env.DB_NAME || 'exams',
    username: process.env.DB_USER || 'postgres',
    // password: process.env.DB_PASS  || 'ramarama30',
    password: 'UherT5W6bcy1TpccC6SUxGsoCPnVx7Bk',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
  },
  test: {
    database: process.env.TEST_DB_NAME || 'test_exams',
    username: process.env.TEST_DB_USER || 'postgres',
    password: 'UherT5W6bcy1TpccC6SUxGsoCPnVx7Bk',
    host: process.env.TEST_DB_HOST || 'localhost',
    port: process.env.TEST_DB_PORT || 5432,
    dialect: 'postgres',
  },
  production: {
    database: process.env.PROD_DB_NAME,
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASS,
    host: process.env.PROD_DB_HOST,
    port: process.env.PROD_DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,  
  }
};

module.exports = config;
