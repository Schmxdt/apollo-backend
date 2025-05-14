import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAlunosUseCase } from './create-alunos-use-case';
import { ok } from '@shared/helpers'

export class CreateAlunosController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { nome, email, data_nascimento } = req.body;

    const createAlunosUseCase = container.resolve(CreateAlunosUseCase);

    const result = await createAlunosUseCase.execute({ nome, email, data_nascimento })
      .then(alunosResult => {
        return ok(alunosResult)
      })
      .catch(error => {
        return error
      })

    return res.status(result.statusCode).json(result);
  }
}