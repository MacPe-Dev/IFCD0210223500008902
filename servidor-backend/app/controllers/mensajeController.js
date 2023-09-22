const Mensaje = require("../models/mensajeModels");

exports.crearMensaje = async (req, res) => {
    try {
        let mensaje;
        // Creamos nuestro mensaje
        mensaje = new Mensaje(req.body);
        await mensaje.save();
        res.send(mensaje);      
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerMensajes = async (req, res) => {
    try {
        const mensajes = await Mensaje.find();
        res.json(mensajes)        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.actualizarMensaje = async (req, res) => {
    try {
        const { nombre, email, telefono, asunto, textomensaje} = req.body;
        let mensaje = await Mensaje.findById(req.params.id);
        if(!mensaje) {
            res.status(404).json({ msg: 'No existe el Mensaje' })
        }
        mensaje.nombre = nombre;
        mensaje.email = email;
        mensaje.telefono = telefono;
        mensaje.asunto = asunto;
        mensaje.textomensaje= textomensaje;
        mensaje = await Mensaje.findOneAndUpdate({ _id: req.params.id },mensaje, { new: true} )
        res.json(mensaje);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerMensaje = async (req, res) => {
    try {
        let mensaje = await Mensaje.findById(req.params.id);
        if(!mensaje) {
            res.status(404).json({ msg: 'No existe el Mensaje' })
        }     
        res.json(mensaje);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.eliminarMensaje = async (req, res) => {
    try {
        let mensaje = await Mensaje.findById(req.params.id);
        if(!mensaje) {
            res.status(404).json({ msg: 'No existe el Mensaje' })
        }    
        await Mensaje.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Mensaje eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}