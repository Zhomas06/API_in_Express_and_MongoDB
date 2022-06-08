const mongoose = require("mongoose");
const { Schema } = mongoose;

const listaSchema = new Schema(
    {

        idFrom: mongoose.ObjectId,
        lista: Array,
        ts_creation: Number,
    
    }
);
const Listas = mongoose.model("listas", listaSchema);

module.exports = Listas;