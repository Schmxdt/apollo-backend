import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers' 
import { GetAlunosByCursoUseCase } from './get-alunos-by-curso-use-case'

export class GetAlunosByCursoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const curso_id = request.params.curso_id

    const getAlunosByCursoUseCase = container.resolve(GetAlunosByCursoUseCase)

    const result = await getAlunosByCursoUseCase.execute(curso_id)
      .then(getAlunosByCursoResult => {
        return ok(getAlunosByCursoResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}