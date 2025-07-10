const config = {
PORT: 3000,
MYSQL_PORT: 3306,};
const routes = {
  HOME: '/',
  API: '/api'}

const bbdd = {
  HOST: 'localhost',
  USER : 'TFG',
  PASSWORD : 'cereza2610',
  DATABASE : 'tfg',
  PORT: config.MYSQL_PORT
}
  module.exports={config,routes,bbdd};