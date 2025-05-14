import { DataSource } from 'typeorm';
import { Alunos } from '../../modules/infra/typeorm/entities/alunos';
import { Matriculas } from '../../modules/infra/typeorm/entities/matriculas';
import { Cursos } from '../../modules/infra/typeorm/entities/cursos';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'db_user',
  password: 'admin',
  database: 'db',
  synchronize: false,
  logging: true,
  entities: [
    Alunos,
    Cursos,
    Matriculas,
  ],
  migrations: [
    "src/shared/infra/typeorm/migrations/*.ts"
  ],
  subscribers: [],
});
