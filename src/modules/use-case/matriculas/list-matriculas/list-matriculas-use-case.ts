import { inject, injectable } from 'tsyringe' 
import { Matriculas } from '@modules/infra/typeorm/entities/matriculas'
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository'

interface IRequest {
  search: string,
  page: number,
  rowsPerPage: number,
  columnOrder: Array<'ASC' | 'DESC'>
}

@injectable()
export class ListMatriculasUseCase {
  constructor(@inject('MatriculasRepository')
    private matriculasRepository: IMatriculasRepository
  ) {}

  async execute({
    search,
    page,
    rowsPerPage,
    columnOrder
  }: IRequest): Promise<Matriculas[]> {
    try {
      const matriculas = await this.matriculasRepository.list(
        search,
        page,
        rowsPerPage,
        columnOrder
      )

      return matriculas
    } catch (err) {
      throw err
    }
  }
}