import Department from '../../../entities/Department';
import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';
import { ICreateDepartmentRequestDTO } from './ICreateDepartmentDTO';

import { createDepartmentValidator } from './CreateDepartmentValidator';

export class CreateDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) {}

  async execute(data: ICreateDepartmentRequestDTO): Promise<Department> {
    await createDepartmentValidator.validate(data, {
      abortEarly: false,
    });

    const department = await this.DepartmentRepository.save(data as Department);

    return department;
  }
}
