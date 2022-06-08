const Personas = require("./personas.model");
const Listas = require("../listas/listas.model");
const Controlador_Lista = require("../listas/listas.controller");

const findAll = async (req, res) => {
    try {
        const docs = await Personas.find().lean().exec();
        res.status(200).json({ results: docs });

    } catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }
}

const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const docs = await Personas.findById(id).exec();
        res.status(200).json({ results: docs });

    } catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }
}
const putOne = async (req, res) => {
    try {
        const Persona = req.body;
        const docs = await Personas.create(Persona);
        res.status(200).json({ results: docs });

    } catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }
}

const terminateOne = async (req, res) => {
    try {
        const { id } = req.params;
        const docs = await Personas.findByIdAndDelete(id);
        res.status(200).json({ results: docs });
    } catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }
}

const findAllListasOfPerson = async (req, res) => {

    try {
        const { id } = req.params;
   
        const docs = await Controlador_Lista.findAllListasFromOnePerson(id);
            res.status(200).json({ results: docs });

    }
    catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }

}

const addingList = async (req, res) => {
    try {
        const newLista = req.body;
        const docs = await Listas.create(newLista);
        res.status(200).json({ results: docs });

    } catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }
}

module.exports = {
    findAll,
    findOne,
    putOne,
    terminateOne,
    findAllListasOfPerson,
    addingList
}