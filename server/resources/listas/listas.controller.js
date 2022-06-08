const Listas = require("./listas.model");


const findAll = async (req, res) => {
    try {

        const docs = await Listas.find().lean().exec();
        res.status(200).json({ results: docs });

    } catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }
}

const findOne = async (req, res) => {

    try {
        const { id } = req.params;
        const docs = await Listas.findById(id).lean().exec();
        res.status(200).json({ results: docs });

    }
    catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }

}

const deleteOne = async (req, res) => {

    try {
        const { id } = req.params;
        const docs = await Listas.findByIdAndDelete(id).lean().exec();
        res.status(200).json({ results: docs });
    }
    catch (e) {
        res.status(500).json({ error: 'Internal error' });
    }

}

const addingElementList = async (req, res) => {
    try {
        const newElement = req.body;
        const { id } = req.params;
        console.log(id)
        console.log(newElement.name)
        console.log(newElement.quantity)
        const docs = await Listas.updateOne(
            { _id: id, "lista.name": newElement.name },
            {
                $inc: { "lista.$.quantity": newElement.quantity },
            },

        ).lean().exec();
        //res.status(200).json({ results: docs });
        res.status(200).json({ results: docs });

    } catch (e) {
        res.status(500).json({ error: e });
    }
}

const findAllListasFromOnePerson = async (id) => {

    //TODO -- Tenemos que importar la funcion desde el controlador
    const docs = await Listas.find({ "idFrom": id }).lean().exec();
    return docs;
}
module.exports = {
    findAll,
    findOne,
    deleteOne,
    addingElementList,
    findAllListasFromOnePerson

}