const pacienteService = require("../services/pacienteService");

exports.getPacientes = async (req, res) => {
    try {
        let pacientes = await pacienteService.getPacientes();
        res.status(200).send(pacientes);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al solicitar los pacientes")
    }
}

exports.getPaciente = async (req, res) => {
    try {
        let paciente = await pacienteService.getPaciente(req.params.dni);
        if(!paciente){
           return res.status(404).json("No existe el paciente")
        }
        res.status(200).json(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).json("Hubo un error al intentar obtener la lista de pacientes")
    }
}

exports.createPaciente = async (req, res) => {
    try {
        await pacienteService.createPaciente(req.body)
        res.status(200).send();
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al crear la película.")
    }
}

exports.updatePaciente = async (req, res) => {
    try {
        const paciente = req.body;
        let _dni = req.params.dni
        let paciente_filtrado = await pacienteService.getPaciente(_dni);
        if(!paciente_filtrado){
            res.json("No existe el paciente que se desea actualizar");
        }

        paciente_filtrado = await pacienteService.updatePaciente(_dni, paciente);
            res.json(paciente_filtrado);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al actualizar el paciente.")
    }
}

exports.deletePaciente = async(req, res) => {
    try {
        await pacienteService.deletePaciente(req.params.dni)
        res.status(200).json("El paciente se eliminó con éxito");
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar el paciente.")
    }
}
