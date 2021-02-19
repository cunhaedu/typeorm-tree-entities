import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

export class RestoreDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.DepartmentRepository.restore(id);
  }
}
