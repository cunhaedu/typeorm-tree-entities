import * as Yup from 'yup';

const createCustomerValidator = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  department_id: Yup.string().required(),
});

export { createCustomerValidator };
