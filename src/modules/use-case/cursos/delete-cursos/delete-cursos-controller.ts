import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers' 
import { DeleteCursosUseCase } from './delete-cursos-use-case'

export class DeleteCursosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const deleteCursosUseCase = container.resolve(DeleteCursosUseCase)

    const result = await deleteCursosUseCase.execute(id)
      .then(cursosResult => {
        return ok(cursosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}