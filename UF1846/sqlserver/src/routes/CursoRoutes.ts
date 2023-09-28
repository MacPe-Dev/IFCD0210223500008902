import { Router } from 'express';
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController';

const routercurso = Router();

routercurso.get('/cursos', getCursos);
routercurso.get('/cursos/:id', getCurso);
routercurso.delete('/cursos/:id', deleteCurso);
routercurso.post('/cursos', postCurso);
routercurso.put('/cursos/:id', updateCurso);

export default routercurso;