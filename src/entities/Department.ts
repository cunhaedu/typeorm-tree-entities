import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  TreeParent,
  TreeChildren,
  Tree,
} from 'typeorm';
import DefaultEntity from './DefaultEntity';

@Entity('departments')
@Tree('closure-table')
export default class Department extends DefaultEntity {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @TreeParent()
  departmentResponsible: Department;

  @TreeChildren()
  subDepartments: Department[];
}
