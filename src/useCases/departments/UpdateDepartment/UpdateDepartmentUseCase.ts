import Department from '../../../entities/Department';
import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';
import { IUpdateDepartmentRequestDTO } from './IUpdateDepartmentDTO';

import { updateDepartmentValidator } from './UpdateDepartmentValidator';

export class UpdateDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) {}

  async execute(data: IUpdateDepartmentRequestDTO): Promise<Department> {
    await updateDepartmentValidator.validate(data, {
      abortEarly: false,
    });

    const department = await this.DepartmentRepository.update(data as Department);

    return department;
  }
}
