import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alunos')
export class Alunos {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  data_nascimento: Date;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
