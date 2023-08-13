import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from "typeorm"
import { Product } from "../product/product.entity"
import { Driver } from "../driver/driver.entity"
import { Order } from "../order/order.entity"

@Entity("sub_products")
export class SubProduct {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 32,
    nullable: true,
  })
  sub_product_name: string

  @Column({ type: "varchar", nullable: true })
  description: string

  @Column({ type: "boolean", nullable: true, default: false })
  status: boolean

  @Column({ type: "decimal", nullable: true })
  price: number

  @ManyToOne(() => Product, (product) => product.subProducts)
  product: Product

  @ManyToOne(() => Driver, (driver) => driver.subProducts)
  driver: Driver

  @ManyToOne(() => Order, (order) => order.subProducts)
  order: Order

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
