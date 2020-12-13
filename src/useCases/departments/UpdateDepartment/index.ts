import {
  DepartmentsRepository,
} from '../../../repositories/implementations/DepartmentRepository';
import { UpdateDepartmentController } from './UpdateDepartmentController';
import { UpdateDepartmentUseCase } from './UpdateDepartmentUseCase';

const departmentsRepository = new DepartmentsRepository();

const updateDepartmentUseCase = new UpdateDepartmentUseCase(departmentsRepository);

const updateDepartmentController = new UpdateDepartmentController(updateDepartmentUseCase);

export { updateDepartmentUseCase, updateDepartmentController };
