const Model = require('../models/user')
const fs = require('fs');
const path = require('path');

const controller = {
	
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de user"
		});
	},

	saveUser: function(req, res){
		const user = new Model();

		const params = req.body;
		user.nombre = params.nombre;
		user.descripcion = params.descripcion;
		user.categor = params.edad;
		user.mail = params.mail;
		user.image = null;

		user.save((err, userStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!projectStored) return res.status(404).send({message: 'No se ha podido guardar el usuario.'});

			return res.status(200).send({user: userStored});
		});
	},

	getUser: function(req, res){
		var userId = req.params.id;

		if(userId == null) return res.status(404).send({message: 'El usuario no existe.'});

		User.findById(userId, (err, user) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!user) return res.status(404).send({message: 'El usuario no existe.'});

			return res.status(200).send({
				user
			});

		});
	},

	getUsers: function(req, res){

		User.find({}).sort('-edad').exec((err, users) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No hay usuarios que mostrar.'});

			return res.status(200).send({projects});
		});

	},

	updateUser: function(req, res){
		var userId = req.params.id;
		var update = req.body;

		User.findByIdAndUpdate(userId, update, {new:true}, (err, userUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!userUpdated) return res.status(404).send({message: 'No existe el usuario para actualizar'});

			return res.status(200).send({
				user: userUpdated
			});
		});

	},

	deleteUser: function(req, res){
		var userId = req.params.id;

		User.findByIdAndRemove(userId, (err, userRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el usuario'});

			if(!userRemoved) return res.status(404).send({message: "No se puede eliminar ese usuario."});

			return res.status(200).send({
				user: userRemoved
			});
		});
	},

};

module.exports = controller;