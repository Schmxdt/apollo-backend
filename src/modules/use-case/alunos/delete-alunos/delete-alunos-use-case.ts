import { inject, injectable } from 'tsyringe'
import { IAlunosRepository } from '@modules/repositories/i-alunos-repository'
import { Alunos } from '@modules/infra/typeorm/entities/alunos'

@injectable()
export class DeleteAlunosUseCase {
  constructor(@inject('AlunosRepository')
    private alunosRepository: IAlunosRepository
  ) {}

  async execute(id: string): Promise<Alunos[]> {
    try {
      await this.alunosRepository.delete(id)

      const alunos= await this.alunosRepository.list('', 0, 100, [])
  
      return alunos
    } catch (err) {
      throw err
    }
  }
}