import { Router } from 'express';

import departmentRoutes from '@useCases/departments/department.routes';

const routes = Router();

routes.use(departmentRoutes);

export default routes;
