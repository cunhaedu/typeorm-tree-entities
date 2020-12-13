import {
  DepartmentsRepository,
} from '../../../repositories/implementations/DepartmentRepository';
import { CreateDepartmentController } from './CreateDepartmentController';
import { CreateDepartmentUseCase } from './CreateDepartmentUseCase';

const departmentsRepository = new DepartmentsRepository();

const createDepartmentUseCase = new CreateDepartmentUseCase(departmentsRepository);

const createDepartmentController = new CreateDepartmentController(createDepartmentUseCase);

export { createDepartmentUseCase, createDepartmentController };
