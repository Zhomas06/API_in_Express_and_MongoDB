const SERVER_PORT = 8888;

const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_USER = "admin";
const DB_PASSWORD = "fullstack";
const Server_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/?authMechanism=DEFAULT`

module.exports = {
  SERVER_PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  Server_URL,
};
