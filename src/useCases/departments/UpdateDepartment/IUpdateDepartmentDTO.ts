import Customer from '@entities/Customer';
import Department from '@entities/Department';

export interface IUpdateDepartmentRequestDTO {
  id?: string;
  name: string;
  parent?: Department;
  children?: Department[];
  created_at?: Date;
  updated_at?: Date;
  customers?: Customer[];
}
