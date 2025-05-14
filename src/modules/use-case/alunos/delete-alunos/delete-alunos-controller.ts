import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers'
import { DeleteAlunosUseCase } from './delete-alunos-use-case'

export class DeleteAlunosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const deleteAlunosUseCase = container.resolve(DeleteAlunosUseCase)

    const result = await deleteAlunosUseCase.execute(id)
      .then(alunosResult => {
        return ok(alunosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}