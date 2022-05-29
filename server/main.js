const express = require("express");
const cors = require("cors");
//const { SERVER_PORT } = require("./config");
let SERVER_PORT = "9009"
const data_base = require("./data_base.js");

const app = express();
app.disable("x-powered-by");
app.use(express.json());
app.use(cors());

const init_server = async () => {
  await data_base.connect();
  app.listen(SERVER_PORT, () => {
    console.log(`Forum API server listening on :${SERVER_PORT}`);
  });
}

init_server()
