import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm"
import { SubProduct } from "../subProduct/subProduct.entity"
import { Driver } from "../driver/driver.entity"

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => SubProduct, (subProduct) => subProduct.order)
  sub_product: SubProduct

  @Column({
    type: "smallint",
    nullable: true,
  })
  count: number

  @Column({ type: "varchar", nullable: true, length: 64 })
  location: string

  // /^998([378]{2}|(9[013-57-9]))\d{7}$/ regex
  @Column({ type: "varchar", nullable: true, length: 15 })
  phone: string

  @OneToMany(() => SubProduct, (subProduct) => subProduct.order)
  subProducts: SubProduct[]

  @OneToMany(() => Driver, (driver) => driver.order)
  driver: Driver

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
