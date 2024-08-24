const { getUsuario }= require('../Repository/usuarioRepository');
const usuarioRepository = require('../Repository/usuarioRepository');

  exports.loginUser = async (email,password)=>{
    const user = await usuarioRepository.GetUserByEmailAndPassword(email, password);
    if (user) {
      return user;
    }else{
      throw new error('credencial incorrecta');
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