import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm"
import { SubCategory } from "../subCategory/subCategory.entity"

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 32,
    nullable: true,
  })
  category_name: string

  @Column({
    type: "smallint",
    nullable: true,
  })
  count: number

  @OneToMany(() => SubCategory, (subCategory) => subCategory.category)
  subCategories: SubCategory[]

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
