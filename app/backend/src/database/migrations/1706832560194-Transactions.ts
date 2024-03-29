import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Transactions1706832560194 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transaction",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "description",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "amount",
            type: "integer",
            isNullable: true,
          },
          {
            name: "type",
            type: "enum",
            isNullable: false,
            enum: ["income", "expense"],
            default: "expense",
          },
          {
            name: "note",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "userId",
            type: "uuid",
          },
          {
            name: "categoryID",
            type: "uuid",
            isNullable: true,
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
            name: "FK_Transactions_Users",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["userId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FK_Transactions_Categories",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["categoryID"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
