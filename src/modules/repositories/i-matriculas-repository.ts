 
import { IMatriculaDTO } from '@modules/dtos/i-matricula-dto' 
import { Matriculas } from '@modules/infra/typeorm/entities/matriculas'

export interface IMatriculasRepository {
  create(data: IMatriculaDTO): Promise<Matriculas>

  list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: ('ASC' | 'DESC')[]
  ): Promise<Matriculas[]>

  get(id: string): Promise<Matriculas>

  getAlunosByCurso(curso_id: string): Promise<Matriculas[]>

  getCursosByAluno(aluno_id: string): Promise<Matriculas[]>

  update(data: IMatriculaDTO): Promise<Matriculas>

  delete(id: string): Promise<void>

  count(search: string): Promise<{ count: number }>
}