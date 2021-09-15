import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { login } from '../../features/user/UserSlice';

import authService from '../../services/http-requests/auth.service';

import { validateRegisterInput } from '../../utils/validateInput';

import './SignUp.css';

const initialValues = { firstName: '', lastName: '', email: '', password: '' };

export default function SignupForm() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateRegisterInput}
      onSubmit={async (values, { setSubmitting }) => {
        let createdUser = values;
        setSubmitting(false);
        const res = await authService.signUp(createdUser);
        dispatch(login(res.data));
        if (!res) alert('Error al registrar el usuario');
        alert('¡Sus datos fueron guardados exitosamente!');
        history.push('/');
      }}
    >
      {formik => (
        <div className='register-container'>
          <div className='row mt-5'>
            <div className='register-form border p-5'>
              <h3 className='pt-5 pb-5'>Registrarse</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                  <input
                    className='form-control mb-2 border'
                    id='firstName'
                    type='text'
                    placeholder='Nombre'
                    {...formik.getFieldProps('firstName')}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className='pb-2 text-danger'>
                      <small>{formik.errors.firstName}</small>
                    </div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    className='form-control mb-2 border'
                    id='lastName'
                    type='text'
                    placeholder='Apellido'
                    {...formik.getFieldProps('lastName')}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className='pb-2 text-danger'>
                      <small>{formik.errors.lastName}</small>
                    </div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    className='form-control mb-2 border'
                    id='email'
                    type='email'
                    placeholder='Email'
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='pb-2 text-danger'>
                      <small>{formik.errors.email}</small>
                    </div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    className='form-control mb-2 border'
                    id='password'
                    type='password'
                    placeholder='Contraseña'
                    {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className='pb-2 text-danger'>
                      <small>{formik.errors.password}</small>
                    </div>
                  )}
                </div>
                <button
                  className='mt-3 pt-3 pb-3 px-5 btn btn-bg'
                  type='submit'
                >
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
