import * as Yup from 'yup';

const createDepartmentValidator = Yup.object().shape({
  name: Yup.string().required(),
  department_id: Yup.string(),
});

export { createDepartmentValidator };
