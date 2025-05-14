import { Repository } from 'typeorm';
import { AppDataSource } from '@shared/infra/data-source';
import { serverError } from '@shared/helpers/http';
import { ICursosRepository } from '@modules/repositories/i-cursos-repository';
import { Cursos } from '../entities/cursos';
import { ICursoDTO } from '@modules/dtos/i-cursos-dto';

export class CursosRepository implements ICursosRepository {
  private repository: Repository<Cursos>;

  constructor() {
    this.repository = AppDataSource.getRepository(Cursos);
  }

  // Create
  async create({
    nome,
    descricao,
  }: ICursoDTO): Promise<Cursos> {
    try {

      const result = this.repository.create({
        nome,
        descricao
      });

      await this.repository.save(result);

      return result;
    }
    catch (error) {
      console.error('Error creating Cursos:', error);
      throw new Error('Error creating Cursos');
    }
  }

  // // List
  async list(
    search: string,
    page: number,
    rowsPerPage: number,
    columnOrder: Array<'ASC' | 'DESC'>
  ): Promise<Cursos[]> {
    try {
      if (typeof columnOrder === 'undefined' || columnOrder.length === 0) {
        columnOrder = ['ASC', 'ASC'];
      }

      const offset = rowsPerPage * page;

      let result = await this.repository.createQueryBuilder('cursos')
        .select([
          'cursos.id as "id"',
          'cursos.nome as "nome"',
          'cursos.descricao as "descricao"',
        ])
        .andWhere('CONVERT(cursos.nome USING utf8) LIKE :search', { search: `%${search}%` })
        .addOrderBy('cursos.nome', 'DESC')
        .addOrderBy('cursos.updated_at', 'ASC')
        .addOrderBy('cursos.nome', columnOrder[0])
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
  async get(id: string): Promise<Cursos> {
    try {
      const result = await this.repository.findOne({
        where: { id },
      });

      if (!result) {
        throw new Error('Cursos not found');
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
    descricao,
  }: ICursoDTO): Promise<Cursos> {
    try {
      const result = await this.repository.findOne({ where: { id } });

      if (!result) {
        throw new Error('Cursos not found');
      }

      result.nome = nome;
      result.descricao = descricao;

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
        throw new Error('Cursos not found');
      }

      await this.repository.remove(result);
    } catch (err) {
      throw serverError(err);
    }
  }

  // // Count
  async count(search: string): Promise<{ count: number }> {
    try {
      const count = await this.repository.createQueryBuilder('cursos')
        .select('COUNT(*)', 'count')
        .where('CONVERT(cursos.nome USING utf8) LIKE :search', { search: `%${search}%` })
        .getRawOne();

      return count;
    } catch (err) {
      throw serverError(err);
    }
  }
}