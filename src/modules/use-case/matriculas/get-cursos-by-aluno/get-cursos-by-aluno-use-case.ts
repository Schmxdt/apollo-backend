import { Matriculas } from '@modules/infra/typeorm/entities/matriculas'   
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetCursosByAlunoUseCase {
  constructor(@inject('MatriculasRepository')
    private MatriculasRepository: IMatriculasRepository
  ) {}

  async execute(aluno_id: string): Promise<Matriculas[]> {
    try {
      const Matriculas = await this.MatriculasRepository.getCursosByAluno(aluno_id)
  
      return Matriculas
    } catch (err) {
      throw err
    }
  }
}