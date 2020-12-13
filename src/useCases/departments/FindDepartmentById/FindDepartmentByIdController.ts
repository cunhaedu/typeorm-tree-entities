import { Request, Response } from 'express';
import { FindDepartmentByIdUseCase } from './FindDepartmentByIdUseCase';

export class FindDepartmentByIdController {
  constructor(
    private findDepartmentByIdUseCase: FindDepartmentByIdUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const department = await this.findDepartmentByIdUseCase.execute(id);

    return response.json(department);
  }
}
