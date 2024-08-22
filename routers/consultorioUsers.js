const express = require('express');
const router = express.Router();
const consultorioRouter = express.Router();
const usuarioController = require('../controllers/usuarioController');

consultorioRouter.use(express.json());
router.get('/',usuarioController.readUsers);
router.get('/login', usuarioController.login);
router.post('/',usuarioController.createUser);
router.put('/:id',usuarioController.updateUser);
router.delete('/:id',usuarioController.deleteUser);


module.exports = router;