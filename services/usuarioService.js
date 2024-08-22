const { getUsuario }= require('../Repository/usuarioRepository');
const usuarioRepository = require('../Repository/usuarioRepository');

exports.autenticarUsuario = async (email, password) => {
    try {
      const user = await getUsuario(email, password);
      
      if (user) {
        return user;
      } else {
        return null; 
      }
    } catch (error) {
      console.error('Error en el servicio de autenticación:', error);
      throw error;
    }
  }

  exports.getUsersRepo = () => {
    return usuarioRepository.getUsersRepo();
  }

  exports.createUser = (user) => {
    try {
      return usuarioRepository.createUserRepo(user);
    }
    catch (error) {
      console.log(error);
    }
  }

  exports.updateUser = (id,user) => {
    try{
      return usuarioRepository.updateUserRepo(id,user);
    } catch(error) {
      console.log(error);
    }
  }
  
  exports.deleteUser = (id) => {
    try{
      return usuarioRepository.deleteUserRepo(id);
    } catch (error) {
      console.log(error);
    }
  }