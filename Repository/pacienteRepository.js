const Movies = require('./PacienteBack');
const PacienteBack = require('./PacienteBack');


exports.getPacientesRepo = async () => {
    try {
        let Pacientes = await PacienteBack.find();
        console.log(Pacientes);
        return Pacientes;
    } catch (error) {
        console.log(error);        
    }
}

exports.getPacienteRepo = async (dni_ingresado) => {
    try {
        let paciente = await PacienteBack.findOne({ dni: dni_ingresado });
        console.log(paciente);
        return paciente;
    } catch (error) {
        console.log(error);        
    }
}

exports.createPacienteRepo = async(paciente) => {
    try {
        let newPaciente = new PacienteBack(paciente);
        console.log(newPaciente);
        console.log ((typeof(newPaciente)))
        await newPaciente.save();
    } catch (error) {
        console.log(error)
    }
}

exports.deletePacienteRepo = async (dni_ingresado) => {
    try {
        let paciente = await PacienteBack.findOne({ dni: dni_ingresado });
        if(!paciente){
            console.log("No existe el paciente")
            return "No se encontró el paciente"
        } else {
            await PacienteBack.findOneAndDelete({_id: paciente._id});
        }
        
    } catch (error) {
        console.log(error);
    }
}

exports.updatePacientesRepo = async (dni_ingresado, paciente) => {
    try {
        
        // Buscar el paciente por DNI
        const paciente_filtrado = await PacienteBack.findOne({ dni: dni_ingresado });

        if (paciente_filtrado) {
        // Modificar las propiedades del documento
        //paciente_filtrado = paciente;
            if (paciente.nombre) paciente_filtrado.nombre = paciente.nombre;
            if (paciente.apellido) paciente_filtrado.apellido = paciente.apellido;
            if (paciente.email) paciente_filtrado.email = paciente.email;
            if (paciente.telefono) paciente_filtrado.telefono = paciente.telefono;
            if (paciente.fechaNacimiento) paciente_filtrado.fechaNacimiento = paciente.fechaNacimiento;
            if (paciente.edad) paciente_filtrado.edad = paciente.edad;
            if (paciente.genero) paciente_filtrado.genero = paciente.genero;
            if (paciente.dni) paciente_filtrado.dni = paciente.dni
            if (paciente.fecha_cons) paciente_filtrado.fecha_cons = paciente.fecha_cons
            if (paciente.razon_cons) paciente_filtrado.razon_cons = paciente.razon_cons
            if (paciente.diagnostico) paciente_filtrado.diagnostico = paciente.diagnostico
            if (paciente.usuario) paciente_filtrado.usuario = paciente.usuario
            if (paciente.cobertura) paciente_filtrado.cobertura = paciente.cobertura


        // Guardar el documento actualizado en la base de datos
        const PacienteActualizado = await paciente_filtrado.save();
        console.log('Paciente actualizado:', PacienteActualizado);
        } else {
        console.log('Paciente no encontrado');
        }
        
    } catch (error) {
        console.log(error)
    }
}