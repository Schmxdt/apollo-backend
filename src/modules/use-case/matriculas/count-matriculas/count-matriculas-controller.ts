import { Request, Response } from 'express'
import { container } from 'tsyringe' 
import { ok } from '@shared/helpers'
import { CountMatriculasUseCase } from './count-matriculas-use-case'

export class CountMatriculasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search
    } = request.body


    const countMatriculasUseCase = container.resolve(CountMatriculasUseCase)

    const result = await countMatriculasUseCase.execute({
        search: search as string
      })
      .then(matriculasCountResult => {
        return ok(matriculasCountResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}