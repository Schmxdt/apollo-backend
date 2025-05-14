import { inject, injectable } from 'tsyringe';
import { Cursos } from '@modules/infra/typeorm/entities/cursos'; 
import { ICursoDTO } from '@modules/dtos/i-cursos-dto';
import { ICursosRepository } from '@modules/repositories/i-cursos-repository';

@injectable()
export class CreateCursosUseCase {
  constructor(
    @inject('CursosRepository')
    private cursosRepository: ICursosRepository,
  ) {}

  async execute({ nome, descricao }: ICursoDTO): Promise<Cursos> {

    const result = this.cursosRepository.create({ nome, descricao });
    
    return result;
  }
}
