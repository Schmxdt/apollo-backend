import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers'
import { UpdateCursosUseCase } from './update-cursos-use-case'

export class UpdateCursosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      nome,
      descricao,
    } = request.body


    const updateCursosUseCase = container.resolve(UpdateCursosUseCase)

    const result = await updateCursosUseCase.execute({
      id,
      nome,
      descricao,
    })
      .then(cursosResult => {
        return ok(cursosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}