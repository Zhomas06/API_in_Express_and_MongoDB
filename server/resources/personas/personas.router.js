//Creation of the router
const express = require("express");
const router = express.Router();
const controlator = require("./personas.controller");

router.route("/personas").get(controlator.findAll).put(controlator.putOne);
router.route("/personas/:id").get(controlator.findOne).delete(controlator.terminateOne);

router.route("/personas/:id/listas/").get(controlator.findAllListas).put(controlator.addingList)



module.exports = router;
 