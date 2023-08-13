import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm"
import { SubProduct } from "../subProduct/subProduct.entity"
import { Order } from "../order/order.entity"

@Entity("drivers")
export class Driver {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: "varchar",
    length: 32,
    nullable: true,
  })
  driver_full_name: string

  @Column({ type: "date", nullable: true })
  driver_birthday: string

  @Column({ type: "varchar", nullable: true, length: 15 })
  driver_phone: string

  @Column({
    type: "boolean",
    nullable: true,
  })
  status: boolean

  @OneToMany(() => SubProduct, (subProduct) => subProduct.driver)
  subProducts: SubProduct[]

  @ManyToOne(() => Order, (order) => order.driver)
  order: Order

  @CreateDateColumn()
  created_at: string

  @UpdateDateColumn()
  updated_at: string

  @DeleteDateColumn()
  deleted_at: string
}
