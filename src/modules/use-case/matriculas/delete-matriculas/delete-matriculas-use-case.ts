import { inject, injectable } from 'tsyringe' 
import { Matriculas } from '@modules/infra/typeorm/entities/matriculas'
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository'

@injectable()
export class DeleteMatriculasUseCase {
  constructor(@inject('MatriculasRepository')
    private matriculasRepository: IMatriculasRepository
  ) {}

  async execute(id: string): Promise<Matriculas[]> {
    try {
      await this.matriculasRepository.delete(id)

      const matriculas= await this.matriculasRepository.list('', 0, 100, [])
  
      return matriculas
    } catch (err) {
      throw err
    }
  }
}