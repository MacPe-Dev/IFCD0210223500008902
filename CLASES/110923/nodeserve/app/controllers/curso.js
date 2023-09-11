const Curso = require('../models/curso')
const fs = require('fs');
const path = require('path');

const controller = {
	
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy el controlador de la creación de curso'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de curso"
		});
	},

	saveCurso: function(req, res){
		const curso = new Curso();

		const params = req.body;
		curso.name = params.name;
		curso.descripcion = params.descripcion;
		curso.category = params.category;
		curso.duracion = params.duracion;
        curso.temas = params.temas;
		curso.image = null;

		curso.save((err, cursoStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!cursoStored) return res.status(404).send({message: 'No se ha podido guardar el curso.'});

			return res.status(200).send({curso: cursoStored});
		});
	},

	getCurso: function(req, res){
		var cursoId = req.params.id;

		if(cursoId == null) return res.status(404).send({message: 'El curso no existe.'});

		Curso.findById(cursoId, (err, curso) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!curso) return res.status(404).send({message: 'El curso no encontrado.'});

			return res.status(200).send({
				curso
			});

		});
	},

	getCursos: function(req, res){

		Curso.find({}).sort('-edad').exec((err, cursos) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!cursos) return res.status(404).send({message: 'No hay cursos que mostrar.'});

			return res.status(200).send({cursos});
		});
    },

	updateCurso: function(req, res){
		var cursoId = req.params.id;
		var update = req.body;

		Curso.findByIdAndUpdate(cursoId, update, {new:true}, (err, cursoUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!cursoUpdated) return res.status(404).send({message: 'No existe el usuario para actualizar'});

			return res.status(200).send({
				curso: cursoUpdated
			});
		});

	},

	deleteCurso: function(req, res){
		var cursoId = req.params.id;

		Curso.findByIdAndRemove(cursoId, (err, cursoRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el usuario'});

			if(!cursoRemoved) return res.status(404).send({message: "No se puede eliminar ese usuario."});

			return res.status(200).send({
				curso: cursoRemoved
			});
		});
	},

};

module.exports = controller;