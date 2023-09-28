import { Router } from 'express';
import { deleteUsuario, getUsuario, getUsuarios, postUsuario, updateUsuario } from '../controllers/UserController';

const routeruser = Router();

routeruser.get('/usuarios', getUsuarios);
routeruser.get('/usuarios/:id', getUsuario);
routeruser.delete('/usuarios/:id', deleteUsuario);
routeruser.post('/usuarios', postUsuario);
routeruser.put('/usuarios/:id', updateUsuario);

export default routeruser;