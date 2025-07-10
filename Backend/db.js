const mysql = require('mysql2');
const {bbdd} = require('./config.js');

const connection=mysql.createConnection({
  host: bbdd.HOST,
  user: bbdd.USER,
  password: bbdd.PASSWORD,
  database: bbdd.DATABASE,
  port: bbdd.PORT
});
connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos');
  }
});
module.exports = connection;