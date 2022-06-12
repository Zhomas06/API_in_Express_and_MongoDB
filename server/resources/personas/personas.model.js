const mongoose = require("mongoose");
const { Schema } = mongoose;

const personaSchema = new Schema(
    {
        //Example : { "_id": Id_Tomas, "name": "Tomas", "surnames": "Navas", "age": 23, "mail": "tomas_defaul_@gmail.com" },

        name: {type: String, required: true},
        surnames: {type: String, required: true},
        age: {type: Number, required: true},
        mail: {type: String, required: true},
    }
);
const Personas = mongoose.model("personas", personaSchema);

module.exports = Personas;