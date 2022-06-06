const express = require("express");
const router = express.Router();
const controlator = require("./listas.controller");

router.route("/listas").get(controlator.findAll);
router.route("/listas/:id").get(controlator.findOne).delete(controlator.deleteOne);
router.route("/test/listas/:id").post(controlator.addingElementList);


module.exports = router;
