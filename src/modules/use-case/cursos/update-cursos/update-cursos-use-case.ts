import { inject, injectable } from 'tsyringe'
import { Cursos } from '@modules/infra/typeorm/entities/cursos' 
import { ICursoDTO } from '@modules/dtos/i-cursos-dto'
import { ICursosRepository } from '@modules/repositories/i-cursos-repository'

@injectable()
export class UpdateCursosUseCase {
  constructor(@inject('CursosRepository')
  private cursosRepository: ICursosRepository
  ) { }

  async execute({
    id,
    nome,
    descricao,
  }: ICursoDTO): Promise<Cursos> {
    try {
      const cursos = await this.cursosRepository.update({
        id,
        nome,
        descricao,
      })

      return cursos
    } catch (err) {
      throw err
    }
  }
}