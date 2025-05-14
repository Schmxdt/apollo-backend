
import { ICursoDTO } from '@modules/dtos/i-cursos-dto'
import { Cursos } from '@modules/infra/typeorm/entities/cursos'

export interface ICursosRepository {
  create(data: ICursoDTO): Promise<Cursos>

  list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: ('ASC' | 'DESC')[]
  ): Promise<Cursos[]>

  get(id: string): Promise<Cursos>

  update(data: ICursoDTO): Promise<Cursos>

  delete(id: string): Promise<void>

  count(search: string): Promise<{ count: number }>
}