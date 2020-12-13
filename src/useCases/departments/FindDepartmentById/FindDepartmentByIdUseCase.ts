import Department from '../../../entities/Department';
import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

export class FindDepartmentByIdUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) {}

  async execute(id: string): Promise<Department> {
    const department = await this.DepartmentRepository.findById(id, [
      'parent',
      'children',
    ]);

    return department;
  }
}
