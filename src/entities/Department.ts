import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  TreeParent,
  TreeChildren,
  Tree,
} from 'typeorm';

@Entity('departments')
@Tree('closure-table')
export default class Department {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @TreeParent()
  parent: Department;

  @TreeChildren()
  children: Department[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
