
import { IAlunoDTO } from '@modules/dtos/i-aluno-dto' 
import { Alunos } from '@modules/infra/typeorm/entities/alunos'

export interface IAlunosRepository {
  create(data: IAlunoDTO): Promise<Alunos>

  list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: ('ASC' | 'DESC')[]
  ): Promise<Alunos[]>

  get(id: string): Promise<Alunos>

  update(data: IAlunoDTO): Promise<Alunos>

  delete(id: string): Promise<void>

  count(search: string): Promise<{ count: number }>
}