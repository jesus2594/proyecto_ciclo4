const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompradorSchema = new Schema({
    
    nombre: { type: String, required: true, max: 128},
    direccion: { type: String, required: true, max: 128},
    telefono: { type: Number, required: true, max: 9999999999},
    email: { type: String, required: true, max: 128},
    metodo_pago: { type: String, required: true, max: 128},
});

module.exports = mongoose.model("comprador", CompradorSchema);