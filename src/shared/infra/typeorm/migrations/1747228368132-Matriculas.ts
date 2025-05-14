import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Matriculas1747228368132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'matriculas',
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: 'aluno_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'curso_id',
                        type: 'int',
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
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
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
