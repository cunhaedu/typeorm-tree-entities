import { Request, Response } from 'express';
import { CreateDepartmentUseCase } from './CreateDepartmentUseCase';

export class CreateDepartmentController {
  constructor(
    private createDepartmentUseCase: CreateDepartmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      parent,
    } = request.body;

    const data = {
      name,
      parent,
    };

    try {
      const department = await this.createDepartmentUseCase.execute(data);

      return response.status(201).json(department);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'unexpected error',
      });
    }
  }
}
