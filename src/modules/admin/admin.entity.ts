import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm"

enum Role {
  admin = "admin",
  superadmin = "superadmin",
}

@Entity("admins")
export class Admin {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 16,
    nullable: true,
  })
  username: string

  @Column({
    type: "varchar",
    length: 100,
    nullable: true,
  })
  password: string

  @Column({ type: "enum", nullable: true, enum: Role })
  role: Role

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
