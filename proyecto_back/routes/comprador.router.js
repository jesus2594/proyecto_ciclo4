const express = require("express");
const router = express.Router();
const compradorController = require("../controllers/comprador.controller");

router.post("/", compradorController.create)
router.get("/", compradorController.find)
router.get("/:id", compradorController.findOne)
router.put("/:id", compradorController.update)
router.delete("/:id",compradorController.remove)

module.exports = router