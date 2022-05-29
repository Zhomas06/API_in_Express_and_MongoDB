const express = require("express");
const router = express.Router();
const controlator = require("./listas.controller");

router.route("/listas").get(controlator.findAll);



module.exports = router;
