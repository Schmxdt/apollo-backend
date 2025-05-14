import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateMatriculasUseCase } from './create-matriculas-use-case';
import { ok } from '@shared/helpers'

export class CreateMatriculasController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { aluno_id, curso_id } = req.body;

    const createMatriculasUseCase = container.resolve(CreateMatriculasUseCase);

    const result = await createMatriculasUseCase.execute({ aluno_id, curso_id})
      .then(matriculasResult => {
        return ok(matriculasResult)
      })
      .catch(error => {
        return error
      })

    return res.status(result.statusCode).json(result);
  }
}