import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('alunos')
export class Alunos {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @Column()
  nome?: string;

  @Column()
  email?: string;

  @Column()
  data_nascimento?: Date;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt?: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt?: Date;
}