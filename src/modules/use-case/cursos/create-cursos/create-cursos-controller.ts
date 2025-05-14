import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCursosUseCase } from './create-cursos-use-case';
import { ok } from '@shared/helpers'

export class CreateCursosController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, descricao } = req.body;

    const createCursosUseCase = container.resolve(CreateCursosUseCase);

    const result = await createCursosUseCase.execute({ nome, descricao})
      .then(cursosResult => {
        return ok(cursosResult)
      })
      .catch(error => {
        return error
      })

    return res.status(result.statusCode).json(result);
  }
}