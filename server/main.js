const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = require("./config");
const data_base = require("./data_base.js");
const PersonasRouter = require('./resources/personas/personas.router');
const ListasRouter = require('./resources/listas/listas.router');
const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

//Define to the app that must be used.
app.use('/', PersonasRouter);
app.use('/', ListasRouter);

const init_server = async () => {
  await data_base.connect();
  app.listen(SERVER_PORT, () => {
    console.log(`Forum API server listening on :${SERVER_PORT}`);
  });
}

init_server()


