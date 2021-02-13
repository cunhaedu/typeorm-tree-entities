import { Request, Response } from 'express';
import { FindDepartmentsUseCase } from './FindDepartmentsUseCase';

export class FindDepartmentController {
  constructor(
    private findDepartmentsUseCase: FindDepartmentsUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const departments = await this.findDepartmentsUseCase.execute();

    return response.json(departments);
  }
}
