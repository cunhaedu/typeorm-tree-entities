import {
  DepartmentsRepository,
} from '../../../repositories/implementations/DepartmentRepository';
import { RestoreDepartmentController } from './RestoreDepartmentController';
import { RestoreDepartmentUseCase } from './RestoreDepartmentUseCase';

const departmentsRepository = new DepartmentsRepository();

const restoreDepartmentUseCase = new RestoreDepartmentUseCase(departmentsRepository);

const restoreDepartmentController = new RestoreDepartmentController(restoreDepartmentUseCase);

export { restoreDepartmentUseCase, restoreDepartmentController };
