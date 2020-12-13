import { Router } from 'express';

import { findDepartmentController } from '@useCases/departments/FindDepartments';
import { findDepartmentByIdController } from '@useCases/departments/FindDepartmentById';
import { createDepartmentController } from '@useCases/departments/CreateDepartment';
import { updateDepartmentController } from '@useCases/departments/UpdateDepartment';
import { deleteDepartmentController } from '@useCases/departments/DeleteDepartment';

const routes = Router();

routes.get('/departments', (req, res) => findDepartmentController.handle(req, res));
routes.get('/departments/:id', (req, res) => findDepartmentByIdController.handle(req, res));
routes.post('/departments', (req, res) => createDepartmentController.handle(req, res));
routes.put('/departments/:id', (req, res) => updateDepartmentController.handle(req, res));
routes.delete('/departments/:id', (req, res) => deleteDepartmentController.handle(req, res));

export default routes;
