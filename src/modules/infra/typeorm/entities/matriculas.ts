import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';
import { Alunos } from "./alunos";
import { Cursos } from "./cursos";

@Entity('matriculas')
export class Matriculas {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column({ name: 'aluno_id' })
  aluno_id?: string;

  @Column({ name: 'curso_id' })
  curso_id?: string;

  @ManyToOne(() => Alunos)
  @JoinColumn({ name: 'aluno_id' })
  aluno: Alunos;

  @ManyToOne(() => Cursos)
  @JoinColumn({ name: 'curso_id' })
  curso: Cursos;

  @Column({ name: 'data_matricula', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_matricula?: Date

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}