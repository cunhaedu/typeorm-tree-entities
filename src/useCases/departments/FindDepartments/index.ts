import {
  DepartmentsRepository,
} from '../../../repositories/implementations/DepartmentRepository';
import { FindDepartmentController } from './FindDepartmentsController';
import { FindDepartmentsUseCase } from './FindDepartmentsUseCase';

const departmentsRepository = new DepartmentsRepository();

const findDepartmentsUseCase = new FindDepartmentsUseCase(departmentsRepository);

const findDepartmentController = new FindDepartmentController(findDepartmentsUseCase);

export { findDepartmentsUseCase, findDepartmentController };
