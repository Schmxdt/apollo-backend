import { IAlunosRepository } from '@modules/repositories/i-alunos-repository'
import { inject, injectable } from 'tsyringe' 

interface IRequest {
  search: string
}

@injectable()
export class CountAlunosUseCase {
  constructor(@inject('AlunosRepository')
    private alunosRepository: IAlunosRepository
  ) {}

  async execute({
    search
  }: IRequest): Promise<{ count: number }> {
    try {
      const alunosCount = await this.alunosRepository.count(search)

      return alunosCount
    } catch (err) {
      throw err
    }
  }
}