import * as Yup from 'yup';

const _textIsRequired = Yup.string().required('Requerido');
const _emailIsRequired = Yup.string()
  .required('Requerido')
  .email('Invalid email address');
const _passwordIsRequired = Yup.string()
  .required('Requerido')
  .min(6, 'Contraseña debe ser de 6 caracteres como mínimo');
const _firstNameIsRequired = Yup.string()
  .max(15, 'Must be 15 characters or less')
  .required('Requerido');
const _lastNameIsRequired = Yup.string()
  .max(20, 'Must be 20 characters or less')
  .required('Requerido');

export const validateLoginInput = Yup.object().shape({
  email: _emailIsRequired,
  password: _passwordIsRequired,
});

export const validateRegisterInput = Yup.object().shape({
  firstName: _firstNameIsRequired,
  lastName: _lastNameIsRequired,
  email: _emailIsRequired,
  password: _passwordIsRequired,
});

export const validateEditHomeInput = Yup.object().shape({
  welcomeText: Yup.string()
    .required('Requerido')
    .min(20, 'Texto de Bienvenida debe ser de 20 caracteres como mínimo'),
  slideOne: Yup.object().shape({
    // imageUrl: _textIsRequired,
  }),
  slideTwo: Yup.object().shape({
    // imageUrl: _textIsRequired,
  }),
  slideThree: Yup.object().shape({
    // imageUrl: _textIsRequired,
  }),
});

export const validateEntryFormInput = Yup.object().shape({
  name: _textIsRequired,
  image: _textIsRequired,
  content: _textIsRequired,
  category: Yup.number().required('Requerido'),
});

export const validateTestimonyFormInput = Yup.object().shape({
  name: _textIsRequired,
  image: _textIsRequired,
  content: _textIsRequired,
});
export const validateActivitiesFormInput = Yup.object().shape({
  name: _textIsRequired,
  image: _textIsRequired,
  content: _textIsRequired,
});

export const validateCategoryFormInput = Yup.object().shape({
  name: _textIsRequired,
  description: _textIsRequired,
});

export const validateEditUserInput = Yup.object().shape({
  firstName: _firstNameIsRequired,
  lastName: _lastNameIsRequired,
  email: _emailIsRequired,
  password: _passwordIsRequired,
});

export const validateContactUsInput = Yup.object().shape({
  firstName: _firstNameIsRequired,
  lastName: _lastNameIsRequired,
  email: _emailIsRequired,
  comments: Yup.string()
    .required('Requerido')
    .min(6, 'Comentario debe ser de 6 caracteres como mínimo'),
});
