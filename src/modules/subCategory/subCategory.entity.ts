import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm"
import { Category } from "../category/category.entity"

@Entity("sub_categories")
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 32,
    nullable: true,
  })
  sub_category_name: string

  @Column({
    type: "smallint",
    nullable: true,
  })
  count: number

  @Column({ type: "varchar", length: 64, nullable: true })
  location: string

  @ManyToOne(() => Category, (category) => category.subCategories)
  category: Category

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
