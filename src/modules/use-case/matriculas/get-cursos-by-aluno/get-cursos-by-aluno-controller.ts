import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers' 
import { GetCursosByAlunoUseCase } from './get-cursos-by-aluno-use-case'

export class GetCursosByAlunoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const aluno_id = request.params.aluno_id

    const getMatriculasUseCase = container.resolve(GetCursosByAlunoUseCase)

    const result = await getMatriculasUseCase.execute(aluno_id)
      .then(matriculasResult => {
        return ok(matriculasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}