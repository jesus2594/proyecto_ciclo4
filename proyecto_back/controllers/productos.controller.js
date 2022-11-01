const Producto = require("../models/productos.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res){
    let producto = new Producto({
       
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        valor: req.body.valor
    })

    producto.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Producto.find(function(err, productos){
        res.json(productos)
    })
}

exports.findOne = function(req,res){
    Producto.findOne({_id: req.params.id},function(err, producto){
        res.json(producto)
    })
}