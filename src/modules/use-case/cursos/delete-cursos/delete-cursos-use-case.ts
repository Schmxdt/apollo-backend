import { inject, injectable } from 'tsyringe'
import { ICursosRepository } from '@modules/repositories/i-cursos-repository'
import { Cursos } from '@modules/infra/typeorm/entities/cursos'

@injectable()
export class DeleteCursosUseCase {
  constructor(@inject('CursosRepository')
    private cursosRepository: ICursosRepository
  ) {}

  async execute(id: string): Promise<Cursos[]> {
    try {
      await this.cursosRepository.delete(id)

      const cursos= await this.cursosRepository.list('', 0, 100, [])
  
      return cursos
    } catch (err) {
      throw err
    }
  }
}