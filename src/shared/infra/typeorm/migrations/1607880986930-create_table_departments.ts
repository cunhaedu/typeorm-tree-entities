import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableDepartments1607880986930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'departments',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'parent_id',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'created_at',
          type: 'date',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'date',
          default: 'now()',
        },
      ],
      foreignKeys: [
        {
          name: 'customers_parents_children_fk',
          columnNames: ['parent_id'],
          referencedTableName: 'departments',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('departments');
  }
}
