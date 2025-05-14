import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAlunosUseCase } from './list-alunos-use-case'
import { ok } from '@shared/helpers'

export class ListAlunosController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      search,
      page,
      rowsPerPage,
      columnOrder
    } = request.body


    const listAlunosUseCase = container.resolve(ListAlunosUseCase)

    const result = await listAlunosUseCase.execute({
        search: search as string,
        page: page as number,
        rowsPerPage: rowsPerPage as number,
        columnOrder: columnOrder as Array<'ASC' | 'DESC'>
      })
      .then(alunosResult => {
        return ok(alunosResult)
      })
      .catch(error => {
        return error
      })

    return response.status(result.statusCode).send(result)
  }
}