import { Repository } from 'typeorm';
import { AppDataSource } from '@shared/infra/data-source';
import { serverError } from '@shared/helpers/http';
import { IAlunosRepository } from '@modules/repositories/i-alunos-repository';
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
  async list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: Array<'ASC' | 'DESC'>
  ): Promise<Alunos[]> {
    try {
      if (typeof columnOrder === 'undefined' || columnOrder.length === 0) {
        columnOrder = ['ASC', 'ASC'];
      }

      const offset = rowsPerPage * page;

      let result = await this.repository.createQueryBuilder('alunos')
        .select([
          'alunos.id as "id"',
          'alunos.nome as "nome"',
          'alunos.email as "email"',
          'alunos.data_nascimento as "data_nascimento"',
        ])
        .andWhere('CONVERT(alunos.nome USING utf8) LIKE :search', { search: `%${search}%` })
        .addOrderBy('alunos.nome', 'DESC')
        .addOrderBy('alunos.updated_at', 'ASC')
        .addOrderBy('alunos.nome', columnOrder[0])
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
  async get(id: string): Promise<Alunos> {
    try {
      const result = await this.repository.findOne({
        where: { id },
      });

      if (!result) {
        throw new Error('Alunos not found');
      }

      return result;
    } catch (err) {
      throw serverError(err);
    }
  }

  // // Update
  async update({
    id,
    nome,
    email,
    data_nascimento,
  }: IAlunoDTO): Promise<Alunos> {
    try {
      const result = await this.repository.findOne({ where: { id } });

      if (!result) {
        throw new Error('Alunos not found');
      }

      result.nome = nome;
      result.email = email;
      result.data_nascimento = data_nascimento;

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
        throw new Error('Alunos not found');
      }

      await this.repository.remove(result);
    } catch (err) {
      throw serverError(err);
    }
  }

  // // Count
  async count(search: string): Promise<{ count: number }> {
    try {
      const count = await this.repository.createQueryBuilder('alunos')
        .select('COUNT(*)', 'count')
        .where('CONVERT(alunos.nome USING utf8) LIKE :search', { search: `%${search}%` })
        .getRawOne();

      return count;
    } catch (err) {
      throw serverError(err);
    }
  }
}