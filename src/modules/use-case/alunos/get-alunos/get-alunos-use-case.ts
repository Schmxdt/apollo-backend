import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers'
import { GetAlunosUseCase } from './get-alunos.controller'

export class GetAlunosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const getAlunosUseCase = container.resolve(GetAlunosUseCase)

    const result = await getAlunosUseCase.execute(id)
      .then(alunosResult => {
        return ok(alunosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}