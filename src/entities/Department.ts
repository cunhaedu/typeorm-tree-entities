import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  TreeParent,
  TreeChildren,
  Tree,
  // ManyToOne,
} from 'typeorm';
import Customer from './Customer';

@Entity('departments')
@Tree('closure-table')
export default class Department {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // @ManyToOne(() => Department, (department) => department.children)
  @TreeParent()
  @JoinColumn({ name: 'parent_id' })
  parent: Department;

  // @OneToMany(() => Department, (department) => department.parent)
  @TreeChildren()
  children: Department[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => Customer, (department) => department.department)
  customers: Customer[];
}
