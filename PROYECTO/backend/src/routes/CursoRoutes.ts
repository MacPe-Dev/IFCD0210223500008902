import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController';
import validateToken from '../services/validate-token';

const router = Router();

router.get('/', validateToken, getCursos);
router.get('/:id', validateToken, getCurso);
router.delete('/:id', validateToken, deleteCurso);
router.post('/', validateToken, postCurso);
router.put('/:id', validateToken, updateCurso);

export default router;