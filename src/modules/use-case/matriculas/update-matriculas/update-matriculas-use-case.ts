import { inject, injectable } from 'tsyringe'
import { Matriculas } from '@modules/infra/typeorm/entities/matriculas' 
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository'
import { IMatriculaDTO } from '@modules/dtos/i-matricula-dto'

@injectable()
export class UpdateMatriculasUseCase {
  constructor(@inject('MatriculasRepository')
  private matriculasRepository: IMatriculasRepository
  ) { }

  async execute({
    id,
    aluno_id,
    curso_id,
  }: IMatriculaDTO): Promise<Matriculas> {
    try {
      const matriculas = await this.matriculasRepository.update({
        id,
        aluno_id,
        curso_id,
      })

      return matriculas
    } catch (err) {
      throw err
    }
  }
}