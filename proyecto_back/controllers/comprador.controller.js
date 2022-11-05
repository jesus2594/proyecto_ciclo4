const Comprador = require("../models/comprador.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function(req, res){
    let comprador = new Comprador({
       
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        metodo_pago: req.body.metodo_pago,
    })

    comprador.save(function(err){
        if(err){
            console.log = false,
            response.exito = false,
            response.msg = "Error al registrar el comprador"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El comprador se registro correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Comprador.find(function(err, comprador){
        res.json(comprador)
    })
}

exports.findOne = function(req,res){
    Comprador.findOne({_id: req.params.id},function(err, comprador){
        res.json(comprador)
    })
}

exports.update = function(req, res){
    let comprador = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        email: req.body.email,
        metodo_pago: req.body.metodo_pago,
    }

    Comprador.findByIdAndUpdate(req.params.id, {$set: comprador}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar los datos del comprador"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "Los datos del comprador se modificaron correctamente"
        res.json(response)
    })
}

exports.remove = function(req, res){
    Comprador.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el comprador"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El comprador fue eliminado correctamente"
        res.json(response)
    })
}

