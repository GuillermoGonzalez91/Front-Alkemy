import React from 'react';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';

import { selectUser } from '../../features/user/UserSlice';

import { validateEditUserInput } from '../../utils/validateInput';

import './EditUserForm.css';

const initialValues = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  roleId: '',
};

const EditUserForm = ({ user }) => {
  const userLoggedIn = useSelector(selectUser);
  console.log(userLoggedIn);

  return (
    <Formik
      initialValues={user ? user : initialValues}
      validationSchema={validateEditUserInput}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {formik => (
        <div className='container'>
          <div className='row mt-5'>
            <div className='user-form border p-5 cbg'>
              <h4 className='text-center mb-4'>Editar Usuario</h4>
              <form onSubmit={formik.handleSubmit} autoComplete='off'>
                <div className='row mt-2'>
                  <div className='col-md-6 mx-auto pt-3 mb-1 '>
                    <input
                      className='form-control pb-3 pt-3 mb-1 border'
                      id='firstName'
                      type='text'
                      placeholder='Nombre'
                      {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className='mb-2 text-danger'>
                        <small>{formik.errors.firstName}</small>
                      </div>
                    )}
                  </div>
                  <div className='col-md-6  pb-4 pt-3 mb-1'>
                    <input
                      className='form-control pb-3 pt-3 mb-1 border'
                      id='lastName'
                      type='text'
                      placeholder='Apellido'
                      {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className='mb-2 text-danger'>
                        <small>{formik.errors.lastName}</small>
                      </div>
                    )}
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control pb-4 pt-3 mb-3 border'
                    id='email'
                    type='email'
                    placeholder='Ejemplo@gmail.com'
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='mb-2 text-danger'>
                      <small>{formik.errors.email}</small>
                    </div>
                  )}
                </div>
                {userLoggedIn && userLoggedIn.userRole === 1 ? (
                  <>
                    <h6 className='text-center mb-4'>Cambiar el Rol</h6>
                    <input type='radio' id='User' name='rol' value='User' />
                    <label htmlFor='User'>User</label>
                      <input type='radio' id='Admin' name='rol' value='Admin' />
                    <label htmlFor='Admin'>Admin</label>
                  </>
                ) : null}
                <div className='box-buttons'>
                  <button className='mt-3 btn btn-bg' type='submit'>
                    Guardar cambios
                  </button>
                  <button className='mt-3 btn btn-bg' type='reset'>
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default EditUserForm;
