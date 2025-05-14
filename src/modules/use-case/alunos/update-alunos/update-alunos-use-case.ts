import { inject, injectable } from 'tsyringe'
import { Alunos } from '@modules/infra/typeorm/entities/alunos'
import { IAlunosRepository } from '@modules/repositories/i-alunos-repository'
import { IAlunoDTO } from '@modules/dtos/i-aluno-dto'

@injectable()
export class UpdateAlunosUseCase {
  constructor(@inject('AlunosRepository')
  private alunosRepository: IAlunosRepository
  ) { }

  async execute({
    id,
    nome,
    email,
    data_nascimento,
  }: IAlunoDTO): Promise<Alunos> {
    try {
      const alunos = await this.alunosRepository.update({
        id,
        nome,
        email,
        data_nascimento,
      })

      return alunos
    } catch (err) {
      throw err
    }
  }
}