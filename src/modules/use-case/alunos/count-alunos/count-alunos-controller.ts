import { Request, Response } from 'express'
import { container } from 'tsyringe' 
import { ok } from '@shared/helpers'
import { CountAlunosUseCase } from './count-alunos-use-case'

export class CountAlunosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search
    } = request.body


    const countAlunosUseCase = container.resolve(CountAlunosUseCase)

    const result = await countAlunosUseCase.execute({
        search: search as string
      })
      .then(alunosCountResult => {
        return ok(alunosCountResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}