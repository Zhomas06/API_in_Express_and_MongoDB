//Creation of the router
const express = require("express");
const router = express.Router();
const controlator = require("./personas.controller");

router.route("/personas").get(controlator.findAll);



module.exports = router;
