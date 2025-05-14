import { Repository } from 'typeorm';
import { AppDataSource } from '@shared/infra/data-source';
import { serverError } from '@shared/helpers/http';
import { IAlunosRepository } from '@modules/repositories/i-aluno-repository';
import { Alunos } from '../entities/alunos';
import { IAlunoDTO } from '@modules/dtos/i-aluno-dto';
import { v4 as uuidv4 } from 'uuid';

export class AlunosRepository implements IAlunosRepository {
  private repository: Repository<Alunos>;

  constructor() {
    this.repository = AppDataSource.getRepository(Alunos);
  }

  // Create
  async create({
    nome,
    email,
    data_nascimento,
  }: IAlunoDTO): Promise<Alunos> {
    try {

      const result = this.repository.create({
        nome,
        email,
        data_nascimento,
      });

      await this.repository.save(result);

      return result;
    }
    catch (error) {
      console.error('Error creating Alunos:', error);
      throw new Error('Error creating Alunos');
    }
  }

  // // List
  // async list(
  //   search: string,
  //   page: number,
  //   rowsPerPage: number,
  //   columnOrder: Array<'ASC' | 'DESC'>
  // ): Promise<Lms[]> {
  //   try {
  //     if (typeof columnOrder === 'undefined' || columnOrder.length === 0) {
  //       columnOrder = ['ASC', 'ASC'];
  //     }

  //     const offset = rowsPerPage * page;

  //     let lms = await this.repository.createQueryBuilder('lms')
  //       .select([
  //         'lms.id as "id"',
  //         'lms.name as "name"',
  //         'lms.score as "score"',
  //       ])
  //       .andWhere('CAST(lms.name AS VARCHAR) ilike :search', { search: `%${search}%` })
  //       .addOrderBy('lms.score', 'DESC')
  //       .addOrderBy('lms.updated_at', 'ASC')
  //       .addOrderBy('lms.name', columnOrder[0])
  //       .offset(offset)
  //       .limit(rowsPerPage)
  //       .take(rowsPerPage)
  //       .getRawMany();

  //     return lms;
  //   } catch (err) {
  //     throw serverError(err);
  //   }
  // }

  // // Get
  // async get(id: string): Promise<Lms> {
  //   try {
  //     const lms = await this.repository.findOne({
  //       where: { id },
  //     });

  //     if (!lms) {
  //       throw new Error('LMS not found');
  //     }

  //     return lms;
  //   } catch (err) {
  //     throw serverError(err);
  //   }
  // }

  // // Update
  // async update({
  //   id,
  //   name,
  //   ans1,
  //   ans2,
  //   ans3,
  //   ans4,
  //   ans5,
  // }: ILmsDTO): Promise<Lms> {
  //   try {
  //     const lms = await this.repository.findOne({ where: { id } });

  //     if (!lms) {
  //       throw new Error('LMS not found');
  //     }

  //     const score = await this.scoreCalculation(ans1, ans2, ans3, ans4, ans5);
  //     lms.name = name;
  //     lms.ans1 = ans1;
  //     lms.ans2 = ans2;
  //     lms.ans3 = ans3;
  //     lms.ans4 = ans4;
  //     lms.ans5 = ans5;
  //     lms.score = score;

  //     await this.repository.save(lms);

  //     return lms;
  //   } catch (err) {
  //     throw serverError(err);
  //   }
  // }

  // // Delete
  // async delete(id: string): Promise<void> {
  //   try {
  //     const lms = await this.repository.findOne({ where: { id } });

  //     if (!lms) {
  //       throw new Error('LMS not found');
  //     }

  //     await this.repository.remove(lms);
  //   } catch (err) {
  //     throw serverError(err);
  //   }
  // }

  // // Count
  // async count(search: string): Promise<{ count: number }> {
  //   try {
  //     const count = await this.repository.createQueryBuilder('lms')
  //       .select('COUNT(*)', 'count')
  //       .where('CAST(lms.name AS VARCHAR) ilike :search', { search: `%${search}%` })
  //       .getRawOne();

  //     return count;
  //   } catch (err) {
  //     throw serverError(err);
  //   }
  // }
}