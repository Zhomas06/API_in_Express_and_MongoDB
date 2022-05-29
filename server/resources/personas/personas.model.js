const mongoose = require("mongoose");
const { Schema } = mongoose;

const personaSchema = new Schema(
    {
        //Example : { "_id": Id_Tomas, "name": "Tomas", "surnames": "Navas", "age": 23, "mail": "tomas_defaul_@gmail.com" },

        name: String,
        surnames: String,
        age: Number,
        mail: String,
    }
);
const Personas = mongoose.model("personas", personaSchema);

module.exports = Personas;