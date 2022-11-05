const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    
    nombre: { type: String, required: true, max: 128},
    descripcion: { type: String, required: true, max: 128},
    valor: { type: Number, required: true, max: 9999999999},
    cantidad: { type: Number, required: true, max: 10},
});

module.exports = mongoose.model("productos", ProductosSchema);