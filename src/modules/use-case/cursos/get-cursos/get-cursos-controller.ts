import { Cursos } from '@modules/infra/typeorm/entities/cursos'  
import { ICursosRepository } from '@modules/repositories/i-cursos-repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class GetCursosUseCase {
  constructor(@inject('CursosRepository')
    private CursosRepository: ICursosRepository
  ) {}

  async execute(id: string): Promise<Cursos> {
    try {
      const Cursos = await this.CursosRepository.get(id)
  
      return Cursos
    } catch (err) {
      throw err
    }
  }
}