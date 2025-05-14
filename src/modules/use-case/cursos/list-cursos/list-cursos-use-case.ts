import { inject, injectable } from 'tsyringe' 
import { Cursos } from '@modules/infra/typeorm/entities/cursos' 
import { ICursosRepository } from '@modules/repositories/i-cursos-repository'

interface IRequest {
  search: string,
  page: number,
  rowsPerPage: number,
  columnOrder: Array<'ASC' | 'DESC'>
}

@injectable()
export class ListCursosUseCase {
  constructor(@inject('CursosRepository')
    private cursosRepository: ICursosRepository
  ) {}

  async execute({
    search,
    page,
    rowsPerPage,
    columnOrder
  }: IRequest): Promise<Cursos[]> {
    try {
      const cursos = await this.cursosRepository.list(
        search,
        page,
        rowsPerPage,
        columnOrder
      )

      return cursos
    } catch (err) {
      throw err
    }
  }
}