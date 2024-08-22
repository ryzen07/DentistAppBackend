const usuarioService = require('../services/usuarioService');

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await usuarioService.autenticarUsuario(email, password);
      if (user) {
        res.status(200).json({ mensaje: 'Autenticación exitosa', usuario: user });
      } else {
        
        res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };

exports.readUsers = async (req,res) => {
  try{ 
    let users = await usuarioService.getUsersRepo();
    res.status(200).send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send("hubo un error al intentar obtener los usuarios")
  }
}

exports.createUser = async (req,res) => {
  try{
    const user = await usuarioService.createUser(req.body)
    res.status(200).send(); 
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al intentar crear el usuario")
  }
}

exports.updateUser = async (req,res) => {
  try{
    let id = req.params.id;
    let body = req.body;
    const updatedUser = await usuarioService.updateUser(id,body)
    if(!updatedUser){
      return res.status(404).json("no se pudo actualizar los datos del usuario")
    }
    res.status(200).send(updatedUser)
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al intentar editar los datos del usuario");
  }
}

exports.deleteUser = async(req,res) => {
  try {
      
      await usuarioService.deleteUser(req.params.id);
      res.status(200).send("usuario auto se eliminó con éxito");
  } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al eliminar los datos del usuario")
  }
}