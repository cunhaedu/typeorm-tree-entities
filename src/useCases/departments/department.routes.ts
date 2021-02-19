import { Router } from 'express';

import { findDepartmentController } from '@useCases/departments/FindDepartments';
import { findDepartmentByIdController } from '@useCases/departments/FindDepartmentById';
import { createDepartmentController } from '@useCases/departments/CreateDepartment';
import { updateDepartmentController } from '@useCases/departments/UpdateDepartment';
import { deleteDepartmentController } from '@useCases/departments/DeleteDepartment';
import { restoreDepartmentController } from '@useCases/departments/RestoreDepartment';

const departmentRoutes = Router();

departmentRoutes.get('/departments', (req, res) => findDepartmentController.handle(req, res));
departmentRoutes.get('/departments/:id', (req, res) => findDepartmentByIdController.handle(req, res));
departmentRoutes.post('/departments', (req, res) => createDepartmentController.handle(req, res));
departmentRoutes.put('/departments/:id', (req, res) => updateDepartmentController.handle(req, res));
departmentRoutes.delete('/departments/:id', (req, res) => deleteDepartmentController.handle(req, res));
departmentRoutes.patch('/departments/:id', (req, res) => restoreDepartmentController.handle(req, res));

export default departmentRoutes;
