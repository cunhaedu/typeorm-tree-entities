import Department from '../../../entities/Department';
import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

export class FindDepartmentsUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) {}

  async execute(): Promise<Department[]> {
    const departments = await this.DepartmentRepository.find();

    return departments;
  }
}
