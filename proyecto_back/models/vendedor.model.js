const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendedorSchema = new Schema({
    
    nombre: { type: String, required: true, max: 128},
    email: { type: String, required: true, max: 128},
    stock_producto: { type: Number, required: true, max: 50},
    
});

module.exports = mongoose.model("vendedor", VendedorSchema);