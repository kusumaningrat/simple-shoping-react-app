import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  product_name: string;

  @Column('number')
  quantity: number;

  @Column('boolean')
  checked: boolean;
}
