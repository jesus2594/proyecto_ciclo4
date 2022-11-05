const Vendedor = require("../models/vendedor.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res){
    let vendedor = new Vendedor({
       
        nombre: req.body.nombre,
        email: req.body.email,
        stock_producto: req.body.stock_producto,
        
    })

    vendedor.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al registrar al vendedor"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El vendedor se registró correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Vendedor.find(function(err, vendedor){
        res.json(vendedor)
    })
}

exports.findOne = function(req,res){
    Vendedor.findOne({_id: req.params.id},function(err, vendedor){
        res.json(vendedor)
    })
}

exports.update = function(req, res){
    let vendedor = {
        nombre: req.body.nombre,
        email: req.body.email,
        stock_producto: req.body.stock_producto,
    }

    Vendedor.findByIdAndUpdate(req.params.id, {$set: vendedor}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar los datos del vendedor"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "Los datos del vendedor se modificaron correctamente"
        res.json(response)
    })
}

exports.remove = function(req, res){
    Vendedor.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el vendedor"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El vendedor fue eliminado correctamente"
        res.json(response)
    })
}

