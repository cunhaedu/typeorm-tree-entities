import { Request, Response } from 'express';
import { RestoreDepartmentUseCase } from './RestoreDepartmentUseCase';

export class RestoreDepartmentController {
  constructor(
    private deleteDepartmentUseCase: RestoreDepartmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    await this.deleteDepartmentUseCase.execute(id);

    return response.json();
  }
}
