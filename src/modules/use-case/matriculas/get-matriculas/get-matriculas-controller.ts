import { Matriculas } from '@modules/infra/typeorm/entities/matriculas'   
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetMatriculasUseCase {
  constructor(@inject('MatriculasRepository')
    private MatriculasRepository: IMatriculasRepository
  ) {}

  async execute(id: string): Promise<Matriculas> {
    try {
      const Matriculas = await this.MatriculasRepository.get(id)
  
      return Matriculas
    } catch (err) {
      throw err
    }
  }
}