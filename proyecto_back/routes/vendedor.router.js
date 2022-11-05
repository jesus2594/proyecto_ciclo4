const express = require("express");
const router = express.Router();
const vendedorController = require("../controllers/vendedor.controller");

router.post("/", vendedorController.create)
router.get("/", vendedorController.find)
router.get("/:id", vendedorController.findOne)
router.put("/:id", vendedorController.update)
router.delete("/:id",vendedorController.remove)

module.exports = router