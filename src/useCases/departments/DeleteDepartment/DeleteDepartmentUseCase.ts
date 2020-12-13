import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

export class DeleteDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.DepartmentRepository.delete(id);
  }
}
