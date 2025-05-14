import { Repository } from 'typeorm';
import { AppDataSource } from '@shared/infra/data-source';
import { serverError } from '@shared/helpers/http';
import { IMatriculasRepository } from '@modules/repositories/i-matriculas-repository';
import { Matriculas } from '../entities/matriculas'; 
import { IMatriculaDTO } from '@modules/dtos/i-matricula-dto';

export class MatriculasRepository implements IMatriculasRepository {
  private repository: Repository<Matriculas>;

  constructor() {
    this.repository = AppDataSource.getRepository(Matriculas);
  }

  // Create
  async create({
    aluno_id,
    curso_id,
  }: IMatriculaDTO): Promise<Matriculas> {
    try {
      const data_matricula = new Date();

      const result = this.repository.create({
        aluno_id,
        curso_id,
        data_matricula: data_matricula,
      });

      await this.repository.save(result);

      return result;
    }
    catch (error) {
      console.error('Error creating Matriculas:', error);
      throw new Error('Error creating Matriculas');
    }
  }

  // // List
  async list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: Array<'ASC' | 'DESC'>
  ): Promise<Matriculas[]> {
    try {
      if (typeof columnOrder === 'undefined' || columnOrder.length === 0) {
        columnOrder = ['ASC', 'ASC'];
      }

      const offset = rowsPerPage * page;

      let result = await this.repository.createQueryBuilder('matriculas')
        .select([
          'matriculas.id as "id"',
          'matriculas.aluno_id as "aluno_id"',
          'matriculas.curso_id as "curso_id"',
        ])
        .andWhere('CONVERT(matriculas.aluno_id USING utf8) LIKE :search', { search: `%${search}%` })
        .addOrderBy('matriculas.aluno_id', 'DESC')
        .addOrderBy('matriculas.updated_at', 'ASC')
        .addOrderBy('matriculas.aluno_id', columnOrder[0])
        .offset(offset)
        .limit(rowsPerPage)
        .take(rowsPerPage)
        .getRawMany();

      return result;
    } catch (err) {
      throw serverError(err);
    }
  }

  // // Get
  async get(id: string): Promise<Matriculas> {
    try {
      const result = await this.repository.findOne({
        where: { id },
      });

      if (!result) {
        throw new Error('Matriculas not found');
      }

      return result;
    } catch (err) {
      throw serverError(err);
    }
  }

  // // Update
  async update({
    id,
    aluno_id,
    curso_id,
  }: IMatriculaDTO): Promise<Matriculas> {
    try {
      const result = await this.repository.findOne({ where: { id } });

      if (!result) {
        throw new Error('Matriculas not found');
      }

      result.aluno_id = aluno_id;
      result.curso_id = curso_id;

      await this.repository.save(result);

      return result;
    } catch (err) {
      throw serverError(err);
    }
  }

  // // Delete
  async delete(id: string): Promise<void> {
    try {
      const result = await this.repository.findOne({ where: { id } });

      if (!result) {
        throw new Error('Matriculas not found');
      }

      await this.repository.remove(result);
    } catch (err) {
      throw serverError(err);
    }
  }

  // // Count
  async count(search: string): Promise<{ count: number }> {
    try {
      const count = await this.repository.createQueryBuilder('matriculas')
        .select('COUNT(*)', 'count')
        .where('CONVERT(matriculas.aluno_id USING utf8) LIKE :search', { search: `%${search}%` })
        .getRawOne();

      return count;
    } catch (err) {
      throw serverError(err);
    }
  }
}