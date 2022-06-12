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

        let docs = await Listas.updateOne(

            //Filter --> Specify which element.
            { _id: id, "lista.name": newElement.name, },
            //Update --> It defines whats going to be done.
            {
                $inc: { "lista.$.quantity": newElement.quantity },
            },

        ).lean().exec();

        //If modifiedCount === 0 then create.
        if (docs.matchedCount === 0) {

            docs = await Listas.updateOne(
                { _id: id },
                {
                    $push: {
                        lista: newElement
                    }
                }
            );
        }

        res.status(200).json({ results: docs });

    } catch (e) {
        res.status(500).json({ error: docs });
    }
}

const findAllListasFromOnePerson = async (id) => {

    //TODO -- Tenemos que importar la funcion desde el controlador
    const docs = await Listas.find({ "idFrom": id }).lean().exec();
    return docs;
}

const deleteElementList = async (req, res) => {
    try {
        const newElement = req.body;
        const { id } = req.params;
        let docs_1 = null;
        const docs = await Listas.find({ _id: id }, { lista: 1 }).lean().exec();
        const index_of_the_element = docs[0].lista.map(object => object.name).indexOf(newElement.name)

        docs_1 = await Listas.findOneAndUpdate({ _id: id }, { $pull: { lista: docs[0].lista[index_of_the_element] } }, { new: true }).lean().exec();
        res.status(200).json({ results: docs_1 });

    } catch (e) {
        res.status(500).json({ error: "The DB was not able to remove the element" });
    }
}

module.exports = {
    findAll,
    findOne,
    deleteOne,
    addingElementList,
    findAllListasFromOnePerson,
    deleteElementList

}