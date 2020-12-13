import {
  DepartmentsRepository,
} from '../../../repositories/implementations/DepartmentRepository';
import { DeleteDepartmentController } from './DeleteDepartmentController';
import { DeleteDepartmentUseCase } from './DeleteDepartmentUseCase';

const departmentsRepository = new DepartmentsRepository();

const deleteDepartmentUseCase = new DeleteDepartmentUseCase(departmentsRepository);

const deleteDepartmentController = new DeleteDepartmentController(deleteDepartmentUseCase);

export { deleteDepartmentUseCase, deleteDepartmentController };
