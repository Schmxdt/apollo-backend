import { Request, Response } from 'express'
import { container } from 'tsyringe' 
import { ok } from '@shared/helpers'
import { CountCursosUseCase } from './count-cursos-use-case'

export class CountCursosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search
    } = request.body


    const countCursosUseCase = container.resolve(CountCursosUseCase)

    const result = await countCursosUseCase.execute({
        search: search as string
      })
      .then(cursosCountResult => {
        return ok(cursosCountResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}