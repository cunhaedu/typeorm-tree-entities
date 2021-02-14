import Department from '../entities/Department';

export interface IDepartmentRepository {
  find(): Promise<Department[]>
  findById(id: string, relations?: string[]): Promise<Department>
  save(department: Department): Promise<Department>
  update(department: Department): Promise<Department>
  delete(id: string): Promise<void>
}
