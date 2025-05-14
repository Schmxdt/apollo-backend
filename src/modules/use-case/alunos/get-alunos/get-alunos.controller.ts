import { Alunos } from '@modules/infra/typeorm/entities/alunos' 
import { IAlunosRepository } from '@modules/repositories/i-alunos-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetAlunosUseCase {
  constructor(@inject('AlunosRepository')
    private AlunosRepository: IAlunosRepository
  ) {}

  async execute(id: string): Promise<Alunos> {
    try {
      const Alunos = await this.AlunosRepository.get(id)
  
      return Alunos
    } catch (err) {
      throw err
    }
  }
}