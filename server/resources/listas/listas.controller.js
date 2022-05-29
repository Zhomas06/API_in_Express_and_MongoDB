const Listas  = require("./listas.model");


const findAll = async (req, res) => {
    try {
        
        const docs = await Listas.find().lean().exec();
        res.status(200).json({ results: docs });

    } catch (e) {

        console.log(e);
        res.status(500).json({ error: 'Internal error' });
    }
}

module.exports = {
    findAll,
}