import { Request, Response } from 'express';
import { UpdateDepartmentUseCase } from './UpdateDepartmentUseCase';

export class UpdateDepartmentController {
  constructor(
    private updateDepartmentUseCase: UpdateDepartmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      parent,
    } = request.body;

    const { id } = request.params;

    const data = {
      id,
      name,
      parent,
    };

    try {
      const department = await this.updateDepartmentUseCase.execute(data);

      return response.status(201).json(department);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unexpected error',
      });
    }
  }
}
