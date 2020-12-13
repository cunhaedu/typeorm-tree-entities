import {
  DepartmentsRepository,
} from '../../../repositories/implementations/DepartmentRepository';
import { FindDepartmentByIdController } from './FindDepartmentByIdController';
import { FindDepartmentByIdUseCase } from './FindDepartmentByIdUseCase';

const departmentsRepository = new DepartmentsRepository();

const findDepartmentByIdUseCase = new FindDepartmentByIdUseCase(departmentsRepository);

const findDepartmentByIdController = new FindDepartmentByIdController(findDepartmentByIdUseCase);

export { findDepartmentByIdUseCase, findDepartmentByIdController };
