const mongoose = require("mongoose");
const { Schema } = mongoose;

const childSchema = new Schema({ name: { type: String, required: true }, quantity: { type: Number, required: true }, });

const listaSchema = new Schema(
    {

        idFrom: mongoose.ObjectId,
        //lista: Array,
        lista: [childSchema],
        ts_creation: Number,

    }
);
const Listas = mongoose.model("listas", listaSchema);

module.exports = Listas;