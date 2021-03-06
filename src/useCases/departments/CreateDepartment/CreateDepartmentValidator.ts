import * as Yup from 'yup';

const createDepartmentValidator = Yup.object().shape({
  name: Yup.string().required(),
  departmentResponsible: Yup.object({
    id: Yup.string(),
  }).optional(),
});

export { createDepartmentValidator };
