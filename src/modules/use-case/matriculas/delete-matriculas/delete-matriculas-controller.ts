import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers' 
import { DeleteMatriculasUseCase } from './delete-matriculas-use-case'

export class DeleteMatriculasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const deleteMatriculasUseCase = container.resolve(DeleteMatriculasUseCase)

    const result = await deleteMatriculasUseCase.execute(id)
      .then(matriculasResult => {
        return ok(matriculasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}