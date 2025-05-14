import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ok } from '@shared/helpers'
import { UpdateMatriculasUseCase } from './update-matriculas-use-case'

export class UpdateMatriculasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      aluno_id,
      curso_id,
    } = request.body


    const updateMatriculasUseCase = container.resolve(UpdateMatriculasUseCase)

    const result = await updateMatriculasUseCase.execute({
      id,
      aluno_id,
      curso_id,
    })
      .then(matriculasResult => {
        return ok(matriculasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).json(result)
  }
}