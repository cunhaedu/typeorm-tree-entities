import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createTableDepartments1613266690183 implements MigrationInterface {
  name = 'createTableDepartments1613266690183'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "departments" ("created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "departmentResponsibleId" uuid, CONSTRAINT "PK_839517a681a86bb84cbcc6a1e9d" PRIMARY KEY ("id"))');
    await queryRunner.query('CREATE TABLE "departments_closure" ("id_ancestor" uuid NOT NULL, "id_descendant" uuid NOT NULL, CONSTRAINT "PK_3e4ee55a233bef0e3464728cc15" PRIMARY KEY ("id_ancestor", "id_descendant"))');
    await queryRunner.query('CREATE INDEX "IDX_f23b3abb6caa54454a2a72da59" ON "departments_closure" ("id_ancestor") ');
    await queryRunner.query('CREATE INDEX "IDX_276148abd382d667072d533af4" ON "departments_closure" ("id_descendant") ');
    await queryRunner.query('ALTER TABLE "departments" ADD CONSTRAINT "FK_308de7409d0783b54f6412917e2" FOREIGN KEY ("departmentResponsibleId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "departments_closure" ADD CONSTRAINT "FK_f23b3abb6caa54454a2a72da591" FOREIGN KEY ("id_ancestor") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    await queryRunner.query('ALTER TABLE "departments_closure" ADD CONSTRAINT "FK_276148abd382d667072d533af49" FOREIGN KEY ("id_descendant") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "departments_closure" DROP CONSTRAINT "FK_276148abd382d667072d533af49"');
    await queryRunner.query('ALTER TABLE "departments_closure" DROP CONSTRAINT "FK_f23b3abb6caa54454a2a72da591"');
    await queryRunner.query('ALTER TABLE "departments" DROP CONSTRAINT "FK_308de7409d0783b54f6412917e2"');
    await queryRunner.query('DROP INDEX "IDX_276148abd382d667072d533af4"');
    await queryRunner.query('DROP INDEX "IDX_f23b3abb6caa54454a2a72da59"');
    await queryRunner.query('DROP TABLE "departments_closure"');
    await queryRunner.query('DROP TABLE "departments"');
  }
}
