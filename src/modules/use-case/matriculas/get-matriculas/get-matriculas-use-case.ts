import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers'
import { GetMatriculasUseCase } from './get-matriculas-controller'

export class GetMatriculasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id

    const getMatriculasUseCase = container.resolve(GetMatriculasUseCase)

    const result = await getMatriculasUseCase.execute(id)
      .then(matriculasResult => {
        return ok(matriculasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}