import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListMatriculasUseCase } from './list-matriculas-use-case'
import { ok } from '@shared/helpers'

export class ListMatriculasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search,
      page,
      rowsPerPage,
      columnOrder
    } = request.body


    const listMatriculasUseCase = container.resolve(ListMatriculasUseCase)

    const result = await listMatriculasUseCase.execute({
        search: search as string,
        page: page as number,
        rowsPerPage: rowsPerPage as number,
        columnOrder: columnOrder as Array<'ASC' | 'DESC'>
      })
      .then(matriculasResult => {
        return ok(matriculasResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).send(result)
  }
}