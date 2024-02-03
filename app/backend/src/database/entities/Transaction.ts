import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column({
    type: "enum",
    nullable: false,
    enum: ["income", "expense"],
    default: "expense",
  })
  type: string;

  @Column()
  salary: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  removed_at: Date;
}
