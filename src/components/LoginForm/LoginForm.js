import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../features/user/UserSlice';

import authService from '../../services/http-requests/auth.service';

import { validateLoginInput } from '../../utils/validateInput';

import './LoginForm.css';

const initialValues = { email: '', password: '' };

export default function LoginForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateLoginInput}
      onSubmit={async values => {
        const data = { email: values.email, password: values.password };
        const res = await authService.login(data);
        if (!res) alert('Error al hacer Login');
        dispatch(login(res.data));
        history.push('/backoffice');
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => (
        <div className='login-container'>
          <div className='row mt-5'>
            <div className='login-form border p-5'>
              <h3 className='pt-5 pb-5'>Iniciar sesión</h3>
              <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='form-group'>
                  <input
                    className='form-control mb-2 border'
                    type='email'
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Email'
                    value={values.email}
                  />
                  {errors.email && touched.email && (
                    <div className='pb-1 text-danger'>
                      <small>{errors.email}</small>
                    </div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    className='form-control mb-2 border'
                    type='password'
                    name='password'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Password'
                    value={values.password}
                  />
                  {errors.password && touched.password && (
                    <div className='pb-1 text-danger'>
                      <small>{errors.password}</small>
                    </div>
                  )}
                </div>
                <button
                  className='mt-3 pt-3 pb-3 px-5 btn btn-bg'
                  type='submit'
                >
                  Iniciar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}
