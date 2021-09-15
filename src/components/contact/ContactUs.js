import React from 'react';
import { Formik } from 'formik';

import contactService from '../../services/http-requests/contact.service';

import { validateContactUsInput } from '../../utils/validateInput';

import './ContactUs.css';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  comments: '',
  phone: '',
};

const ContactUs = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateContactUsInput}
      onSubmit={(values, { setSubmitting }) => {
        const contactToSend = {
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          message: values.comments,
          phone: values.phone,
        };
        contactService
          .sendContact(contactToSend)
          .then(res => setSubmitting(false))
          .catch(err => console.error(err));
      }}
    >
      {formik => (
        <div className='contact-us-container'>
          <div className='row mt-5'>
            <div className='p-5 contact-us-form border'>
              <h3 className='pt-5 pb-5'>Contactate con nosotros</h3>
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
                    id='phone'
                    type='tel'
                    placeholder='Teléfono'
                    {...formik.getFieldProps('phone')}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <div className='mb-2 text-danger'>
                      <small>{formik.errors.phone}</small>
                    </div>
                  )}
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
                <div className='form-group'>
                  <textarea
                    className='form-control pb-4 pt-3 border comments'
                    id='comments'
                    type='comments'
                    placeholder='Comentarios aquí...'
                    {...formik.getFieldProps('comments')}
                  />
                  {formik.touched.comments && formik.errors.comments && (
                    <div className='mb-2 text-danger'>
                      <small>{formik.errors.comments}</small>
                    </div>
                  )}
                </div>
                <button
                  className='mt-3 pt-3 pb-3 px-5 btn btn-bg'
                  type='submit'
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default ContactUs;
