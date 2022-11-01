const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productos.controller");

router.post("/", productosController.create)
router.get("/", productosController.find)
router.get("/:id", productosController.findOne)

module.exports = router