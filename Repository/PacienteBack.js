const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true 
        },
        apellido: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefono: {
            type: Number,
            required: true
        },
        fechaNacimiento: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },
        genero: {
            type: String,
            required: true
        },
        dni: {
            type: String,
            required: true
        },
        fecha_cons: {
            type: String,
            required: true
        },
        razon_cons: {
            type: String,
            required: true
        },
        diagnostico: {
            type: String,
            required: false
        },
        usuario: {
            type: String,
            required: true
        },
        cobertura: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Pacientes', pacienteSchema)
