import { Router } from 'express';
import { CountCursosController } from '@modules/use-case/cursos/count-cursos/count-cursos-controller';
import { CreateCursosController } from '@modules/use-case/cursos/create-cursos/create-cursos-controller';
import { DeleteCursosController } from '@modules/use-case/cursos/delete-cursos/delete-cursos-controller';
import { GetCursosController } from '@modules/use-case/cursos/get-cursos/get-cursos-use-case';
import { ListCursosController } from '@modules/use-case/cursos/list-cursos/list-cursos-controller';
import { UpdateCursosController } from '@modules/use-case/cursos/update-cursos/update-cursos-controller';

const cursosRoutes = Router();
const createCursosController = new CreateCursosController();
const listCursosController = new ListCursosController();
const getCursosController = new GetCursosController();
const updateCursosController = new UpdateCursosController();
const deleteCursosController = new DeleteCursosController();
const countCursosController = new CountCursosController();
 
cursosRoutes.post('/', (req, res) => {createCursosController.handle(req, res)})
cursosRoutes.post('/list', (req, res) => {listCursosController.handle(req, res)})
cursosRoutes.get('/:id', (req, res) => {getCursosController.handle(req, res)}) 
cursosRoutes.put('/', (req, res) => {updateCursosController.handle(req, res)})
cursosRoutes.delete('/:id', (req, res) => {deleteCursosController.handle(req, res)})
cursosRoutes.post('/count', (req, res) => {countCursosController.handle(req, res)})

export { cursosRoutes };