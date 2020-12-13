import { Request, Response } from 'express';
import { DeleteDepartmentUseCase } from './DeleteDepartmentUseCase';

export class DeleteDepartmentController {
  constructor(
    private deleteDepartmentUseCase: DeleteDepartmentUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    await this.deleteDepartmentUseCase.execute(id);

    return response.json();
  }
}
