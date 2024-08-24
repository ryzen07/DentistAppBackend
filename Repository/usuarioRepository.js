//const conectarDB = require('../db/db');
const UsuarioBack = require('./UsuarioBack');

//conectarDB();

exports.GetUserByEmailAndPassword = async (email, password)=>{
  try {
    return await UsuarioBack.findOne({email, password});
  } catch (error) {
    console.error('error al consultar usuario:',error);
    throw error;
  }
};

exports.getUsersRepo = async () => {
  try {
    let users = await UsuarioBack.find();
    return users;
  } catch (error) {
    console.log(error);
  }
}

exports.createUserRepo = async (user) => {
  try{
    let newUser = UsuarioBack(user);
    await newUser.save();
    return newUser;
  }
  catch (error) {
    console.log(error)
  }
} 

exports.updateUserRepo = async (id, userInfo) => {
  try{
    let user = await UsuarioBack.findById(id);
    if(!user){
      res.json("No existe el usuario que desea modificar / actualizar");
    }
    user = UsuarioBack.findOneAndReplace(
      {_id:id},userInfo,{new: true})
      return user;
    } catch(error) {
      console.log(error)
    }
}

exports.deleteUserRepo = async (id) => {
  try {
    // Elimina directamente usando el modelo
    const user = await UsuarioBack.findByIdAndDelete(id);

    if (!user) {
      return "No existe el usuario que desea eliminar";
    }

    return "Usuario eliminado exitosamente";
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al intentar eliminar el usuario");
  }
}

/*
try {
    // Elimina el usuario directamente por el ID
    const user = await UsuarioBack.findByIdAndDelete(id);

    if (!user) {
      return "No existe el usuario que desea eliminar";
    }

    return "Usuario eliminado exitosamente";
  } catch (error) {
    console.log(error);
    throw new Error("Hubo un error al intentar eliminar el usuario");
  }
}*/



/* try{
    let user = await UsuarioBack.findById(id);
    if(!user){
      return "no existe el usuario que desea eliminar"
    }
    await user.findByIdAndDelete({id});
  } catch (error) {
    console.log(error);




      try{
    let user = await UsuarioBack.findById(id);
    if(!user){
      return "no existe el usuario que desea eliminar"
    }
    await user.findByIdAndDelete({_id:id});
  } catch (error) {
    console.log(error);
  }
  }*/