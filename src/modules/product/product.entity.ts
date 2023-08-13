import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm"
import { SubProduct } from '../subProduct/subProduct.entity';

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 32,
    nullable: true,
  })
  product_name: string

  @Column({
    type: "smallint",
    nullable: true,
  })
  count: number

  @OneToMany(() => SubProduct, (subProduct) => subProduct.product)
  subProducts: SubProduct[]

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
