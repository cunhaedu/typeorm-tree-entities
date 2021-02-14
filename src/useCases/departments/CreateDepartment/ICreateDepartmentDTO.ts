import Department from '@entities/Department';

export interface ICreateDepartmentRequestDTO {
  name: string;
  departmentResponsible?: Department;
}
