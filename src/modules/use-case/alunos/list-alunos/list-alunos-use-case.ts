import { inject, injectable } from 'tsyringe' 
import { Alunos } from '@modules/infra/typeorm/entities/alunos'
import { IAlunosRepository } from '@modules/repositories/i-alunos-repository'

interface IRequest {
  search: string,
  page: number,
  rowsPerPage: number,
  columnOrder: Array<'ASC' | 'DESC'>
}

@injectable()
export class ListAlunosUseCase {
  constructor(@inject('AlunosRepository')
    private alunosRepository: IAlunosRepository
  ) {}

  async execute({
    search,
    page,
    rowsPerPage,
    columnOrder
  }: IRequest): Promise<Alunos[]> {
    try {
      const alunos = await this.alunosRepository.list(
        search,
        page,
        rowsPerPage,
        columnOrder
      )

      return alunos
    } catch (err) {
      throw err
    }
  }
}