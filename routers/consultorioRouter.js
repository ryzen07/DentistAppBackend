const express = require('express');
const consultorioRouter = express.Router();
const consultorioController = require('../controllers/consultorioController');

//Middleware
consultorioRouter.use(express.json());

consultorioRouter.get('/', consultorioController.getPacientes);
consultorioRouter.get('/:dni', consultorioController.getPaciente);
consultorioRouter.post('/', consultorioController.createPaciente);
consultorioRouter.put('/:dni', consultorioController.updatePaciente);
consultorioRouter.delete('/:dni', consultorioController.deletePaciente);

module.exports = consultorioRouter
