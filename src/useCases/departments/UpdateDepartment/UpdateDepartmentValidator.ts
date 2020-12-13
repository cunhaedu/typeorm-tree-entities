import * as Yup from 'yup';

const updateDepartmentValidator = Yup.object().shape({
  id: Yup.string().required(),
  name: Yup.string().required(),
  department_id: Yup.string(),
});

export { updateDepartmentValidator };
