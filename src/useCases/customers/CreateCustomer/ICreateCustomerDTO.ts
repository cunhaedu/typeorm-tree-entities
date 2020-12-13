import Department from '@entities/Department';

export interface ICreateOrphanageRequestDTO {
  name: string;
  email: string;
  department: Department[];
}
