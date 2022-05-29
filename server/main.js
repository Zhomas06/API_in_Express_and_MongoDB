const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = require("./config");
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



//----------------------------------------------------------------------

const mongoose = require("mongoose");
const { Schema } = mongoose;

const personaSchema = new Schema(
  {

    //{ "_id": Id_Tomas, "name": "Tomas", "surnames": "Navas", "age": 23, "mail": "tomas_defaul_@gmail.com" },
    //_id: mongoose.Types.ObjectId,
    name: String,
    surnames: String,
    age: Number,
    mail: String,
  }
);

const Personas = mongoose.model("personas", personaSchema);

const findAll = async (req, res) => {
  try {
    console.log(Personas)
    const docs = await Personas.find().lean().exec();
    //const docs = await Personas.find().lean().exec();
    console.log(docs)
    res.status(200).json({ results: docs });
  } catch (e) {

    console.log(e);
    res.status(500).json({ error: 'Internal error' });
  }
}
//Creation of the router
const router = express.Router();
router.route("/personas").get(findAll);

//Define to the app that must be used.
app.use('/', router);