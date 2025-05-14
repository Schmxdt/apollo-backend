import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers'
import { UpdateAlunosUseCase } from './update-alunos-use-case'

export class UpdateAlunosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      nome,
      email,
      data_nascimento,
    } = request.body


    const updateAlunosUseCase = container.resolve(UpdateAlunosUseCase)

    const result = await updateAlunosUseCase.execute({
      id,
      nome,
      email,
      data_nascimento,
    })
      .then(alunosResult => {
        return ok(alunosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}