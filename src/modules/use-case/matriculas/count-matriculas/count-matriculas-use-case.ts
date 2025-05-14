
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository'
import { inject, injectable } from 'tsyringe' 

interface IRequest {
  search: string
}

@injectable()
export class CountMatriculasUseCase {
  constructor(@inject('MatriculasRepository')
    private matriculasRepository: IMatriculasRepository
  ) {}

  async execute({
    search
  }: IRequest): Promise<{ count: number }> {
    try {
      const matriculasCount = await this.matriculasRepository.count(search)

      return matriculasCount
    } catch (err) {
      throw err
    }
  }
}