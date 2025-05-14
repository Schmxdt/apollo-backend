import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCursosUseCase } from './list-cursos-use-case'
import { ok } from '@shared/helpers'

export class ListCursosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search,
      page,
      rowsPerPage,
      columnOrder
    } = request.body


    const listCursosUseCase = container.resolve(ListCursosUseCase)

    const result = await listCursosUseCase.execute({
        search: search as string,
        page: page as number,
        rowsPerPage: rowsPerPage as number,
        columnOrder: columnOrder as Array<'ASC' | 'DESC'>
      })
      .then(cursosResult => {
        return ok(cursosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).send(result)
  }
}