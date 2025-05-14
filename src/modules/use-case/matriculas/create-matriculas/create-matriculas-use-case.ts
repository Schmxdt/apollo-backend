import { inject, injectable } from 'tsyringe';
import { Matriculas } from '@modules/infra/typeorm/entities/matriculas';  
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository';
import { IMatriculaDTO } from '@modules/dtos/i-matricula-dto';

@injectable()
export class CreateMatriculasUseCase {
  constructor(
    @inject('MatriculasRepository')
    private matriculasRepository: IMatriculasRepository,
  ) {}

  async execute({ aluno_id, curso_id }: IMatriculaDTO): Promise<Matriculas> {

    const result = this.matriculasRepository.create({ aluno_id, curso_id });
    
    return result;
  }
}
