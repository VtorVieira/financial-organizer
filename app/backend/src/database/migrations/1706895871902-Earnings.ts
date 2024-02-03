import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Earnings1706895871902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "earn",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "salary",
            type: "integer",
            isNullable: true,
          },
          {
            name: "amount",
            type: "integer",
            isNullable: true,
          },
          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "userId",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "removed_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FK_Earnings_Users",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["userId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("earnings");
  }
}
