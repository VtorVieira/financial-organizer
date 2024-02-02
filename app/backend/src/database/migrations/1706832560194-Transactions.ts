import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Transactions1706832560194 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "amount",
                        type: "integer",
                    },
                    {
                        name: "type",
                        type: "enum",
                        enum: ["income", "expense"],
                        default: "expense"
                        
                    },
                    {
                        name: "date",
                        type: "timestamp",
                    },
                    {
                        name: "note",
                        type: "varchar",
                    },
                    {
                        name: "userId",
                        type: "uuid",
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
            }));
        }
        
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("transactions");
        }
        
    }
