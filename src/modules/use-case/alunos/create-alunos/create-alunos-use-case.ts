import { inject, injectable } from 'tsyringe'; 
import { IAlunoDTO } from '@modules/dtos/i-aluno-dto';
import { Alunos } from '@modules/infra/typeorm/entities/alunos';
import { IAlunosRepository } from '@modules/repositories/i-aluno-repository';

@injectable()
export class CreateAlunosUseCase {
  constructor(
    @inject('AlunosRepository')
    private alunosRepository: IAlunosRepository,
  ) {}

  async execute({ nome, email, data_nascimento }: IAlunoDTO): Promise<Alunos> {

    const result = this.alunosRepository.create({ nome, email, data_nascimento });
    
    return result;
  }
}
