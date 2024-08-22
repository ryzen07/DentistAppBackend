const pacienteRepository = require('../Repository/pacienteRepository');

exports.getPacientes = () => {
    try {
        return pacienteRepository.getPacientesRepo();
    } catch (error) {
        console.log(error);
    }
}

exports.getPaciente = (dni) => {
    try {
        return pacienteRepository.getPacienteRepo(dni);
    } catch (error) {
        console.log(error);
    }
}

exports.createPaciente = (paciente) => {
    try {
        pacienteRepository.createPacienteRepo(paciente);
    } catch (error) {
        console.log(error);
    }
}

exports.updatePaciente = (dni_ingresado, paciente) => {
    try {
        pacienteRepository.updatePacientesRepo(dni_ingresado, paciente);
    } catch (error) {
        console.log(error);
    }
}

exports.deletePaciente = (dni) => {
    try {
        pacienteRepository.deletePacienteRepo(dni);
    }catch (error) {
        console.log(error);
    }
}

//////////////////////////
