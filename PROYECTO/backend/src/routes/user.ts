import { Router } from 'express';
import { loginUser, newUser } from '../services/user.Auth';

const router = Router();

router.post('/registro', newUser);
router.post('/acceso', loginUser)

export default router;