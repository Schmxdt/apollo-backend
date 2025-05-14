import { Router } from 'express';
import { CountMatriculasController } from '@modules/use-case/matriculas/count-matriculas/count-matriculas-controller';
import { CreateMatriculasController } from '@modules/use-case/matriculas/create-matriculas/create-matriculas-controller';
import { DeleteMatriculasController } from '@modules/use-case/matriculas/delete-matriculas/delete-matriculas-controller';
import { GetMatriculasController } from '@modules/use-case/matriculas/get-matriculas/get-matriculas-use-case';
import { ListMatriculasController } from '@modules/use-case/matriculas/list-matriculas/list-matriculas-controller';
import { UpdateMatriculasController } from '@modules/use-case/matriculas/update-matriculas/update-matriculas-controller';
import { GetAlunosByCursoController } from '@modules/use-case/matriculas/get-alunos-by-curso/get-alunos-by-curso-controller';
import { GetCursosByAlunoController } from '@modules/use-case/matriculas/get-cursos-by-aluno/get-cursos-by-aluno-controller';

const matriculasRoutes = Router();
const createMatriculasController = new CreateMatriculasController();
const listMatriculasController = new ListMatriculasController();
const getMatriculasController = new GetMatriculasController();
const updateMatriculasController = new UpdateMatriculasController();
const deleteMatriculasController = new DeleteMatriculasController();
const countMatriculasController = new CountMatriculasController();
const getAlunosByCursoController = new GetAlunosByCursoController();
const getCursosByAlunoController = new GetCursosByAlunoController();
 
matriculasRoutes.post('/', (req, res) => {createMatriculasController.handle(req, res)})
matriculasRoutes.post('/list', (req, res) => {listMatriculasController.handle(req, res)})
matriculasRoutes.get('/:id', (req, res) => {getMatriculasController.handle(req, res)}) 
matriculasRoutes.put('/', (req, res) => {updateMatriculasController.handle(req, res)})
matriculasRoutes.delete('/:id', (req, res) => {deleteMatriculasController.handle(req, res)})
matriculasRoutes.post('/count', (req, res) => {countMatriculasController.handle(req, res)})

//
matriculasRoutes.get('/getAlunosByCurso/:curso_id', (req, res) => {getAlunosByCursoController.handle(req, res)})
matriculasRoutes.get('/getCursosByAluno/:aluno_id', (req, res) => {getCursosByAlunoController.handle(req, res)})
//




export { matriculasRoutes };