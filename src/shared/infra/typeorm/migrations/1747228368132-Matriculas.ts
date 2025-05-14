import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Matriculas1747228368132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'matriculas',
            columns: [
                {
                    name: 'id',
                    type: 'char',
                    length: '36',
                    isPrimary: true,
                    isNullable: false,
                },
                {
                    name: 'aluno_id',
                    type: 'char',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'curso_id',
                    type: 'char',
                    length: '36',
                    isNullable: false,
                },
                {
                    name: 'data_matricula',
                    type: 'date',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    isNullable: false,
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                    isNullable: false,
                },
            ],
            foreignKeys: [
                {
                    name: 'FKAluno',
                    referencedTableName: 'alunos',
                    referencedColumnNames: ['id'],
                    columnNames: ['aluno_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'FKCurso',
                    referencedTableName: 'cursos',
                    referencedColumnNames: ['id'],
                    columnNames: ['curso_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('matriculas');
    }

}
