const mongoose = require("mongoose");
const { Schema } = mongoose;

const listaSchema = new Schema(
    {
        //Example : { "_id": Id_Tomas, "name": "Tomas", "surnames": "Navas", "age": 23, "mail": "tomas_defaul_@gmail.com" },

        idFrom: mongoose.ObjectId,
        lista: Array,
        ts_creation: Number,
    
    }
);
const Listas = mongoose.model("listas", listaSchema);

module.exports = Listas;