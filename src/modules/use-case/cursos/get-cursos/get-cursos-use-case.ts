import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers'
import { GetCursosUseCase } from './get-cursos-controller'

export class GetCursosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const getCursosUseCase = container.resolve(GetCursosUseCase)

    const result = await getCursosUseCase.execute(id)
      .then(cursosResult => {
        return ok(cursosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}