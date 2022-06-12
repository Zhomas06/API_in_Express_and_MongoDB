const express = require("express");
const router = express.Router();
const controlator = require("./listas.controller");

router.route("/listas").get(controlator.findAll);
router.route("/listas/:id").get(controlator.findOne).delete(controlator.deleteOne);
router.route("/listas/:id/items").delete(controlator.deleteElementList).post(controlator.addingElementList);

module.exports = router;
