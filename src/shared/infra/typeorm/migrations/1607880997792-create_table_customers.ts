import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableCustomers1607880997792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'customers',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          default: 'uuid_generate_v4()',
          isPrimary: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'department_id',
          type: 'varchar',
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
          name: 'customer_department_fk',
          columnNames: ['department_id'],
          referencedTableName: 'departments',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('customers');
  }
}
