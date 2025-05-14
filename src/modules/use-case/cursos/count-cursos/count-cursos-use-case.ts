import { ICursosRepository } from '@modules/repositories/i-cursos-repository'
import { inject, injectable } from 'tsyringe' 

interface IRequest {
  search: string
}

@injectable()
export class CountCursosUseCase {
  constructor(@inject('CursosRepository')
    private cursosRepository: ICursosRepository
  ) {}

  async execute({
    search
  }: IRequest): Promise<{ count: number }> {
    try {
      const cursosCount = await this.cursosRepository.count(search)

      return cursosCount
    } catch (err) {
      throw err
    }
  }
}