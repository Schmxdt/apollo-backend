import { Router } from 'express'; 
import { CreateAlunosController } from '@modules/use-case/alunos/create-alunos/create-alunos-controller';
import { ListAlunosController } from '@modules/use-case/alunos/list-alunos/list-alunos-controller';
import { GetAlunosController } from '@modules/use-case/alunos/get-alunos/get-alunos-use-case';
import { UpdateAlunosController } from '@modules/use-case/alunos/update-alunos/update-alunos-controller';
import { DeleteAlunosController } from '@modules/use-case/alunos/delete-alunos/delete-alunos-controller';
import { CountAlunosController } from '@modules/use-case/alunos/count-alunos/count-alunos-controller';

const alunosRoutes = Router();
const createAlunosController = new CreateAlunosController();
const listAlunosController = new ListAlunosController();
const getAlunosController = new GetAlunosController();
const updateAlunosController = new UpdateAlunosController();
const deleteAlunosController = new DeleteAlunosController();
const countAlunosController = new CountAlunosController();
 
alunosRoutes.post('/', (req, res) => {createAlunosController.handle(req, res)})
alunosRoutes.post('/list', (req, res) => {listAlunosController.handle(req, res)})
alunosRoutes.get('/:id', (req, res) => {getAlunosController.handle(req, res)}) 
alunosRoutes.put('/', (req, res) => {updateAlunosController.handle(req, res)})
alunosRoutes.delete('/:id', (req, res) => {deleteAlunosController.handle(req, res)})
alunosRoutes.post('/count', (req, res) => {countAlunosController.handle(req, res)})

export { alunosRoutes };