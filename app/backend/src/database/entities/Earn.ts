import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("earnings")
export class Earn {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  salary: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  removed_at: Date;
}
