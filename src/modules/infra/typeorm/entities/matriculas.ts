import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('cursos')
export class Matriculas {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  aluno_id?: string;

  @Column()
  curso_id?: string;

  @Column({ name: 'data_matricula', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_matricula?: Date

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}