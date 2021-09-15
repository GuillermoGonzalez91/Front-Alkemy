import React from 'react';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { validateTestimonyFormInput } from '../../../utils/validateInput';

import './TestimonyForm.css';

const initialValues = {
  name: '',
  content: '',
  image: '',
};

const TestimonyForm = ({ testimony }) => {
  return (
    <Formik
      initialValues={testimony ? testimony : initialValues}
      validationSchema={validateTestimonyFormInput}
      onSubmit={values => {
        /*
            TODO: use testimony service
                  in case there is a testimony make a PATCH request to endpoint (/testimonials/:id), 
                  otherwise, make a POST request to endpoint (/testimonials)
          */
        /* testimony 
                ? testimonyService.updateTestimony(testimony.id, newTestimony) 
                : testimonyService.createTestimony(newTestimony);
          */
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        touched,
        values,
      }) => (
        <div className='container pt-5 testimony-form'>
          <h1 className='text-center pb-4'>
            {testimony ? 'Actualizar testimonio' : 'Crear testimonio'}
          </h1>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='form-group'>
              <label>Título Del Testimonio:</label>
              <input
                className='form-control'
                name='name'
                onBlur={handleBlur}
                onChange={handleChange}
                type='text'
                value={values.name}
              />
              {errors.name && touched.name && (
                <div className='text-danger'>
                  <small>{errors.name}</small>
                </div>
              )}
            </div>
            <div className='form-group'>
              <label>Imagen:</label>
              <input
                accept='.jpg,.png'
                className='form-control-file'
                name='image'
                type='file'
                onBlur={handleBlur}
                onChange={handleChange}
              />
              {errors.image && touched.image && (
                <div className='text-danger'>
                  <small>{errors.image}</small>
                </div>
              )}
            </div>
            <div className='form-group'>
              <label>Contenido:</label>
              <CKEditor
                editor={ClassicEditor}
                data={values.content}
                onChange={(e, editor) =>
                  setFieldValue('content', editor.getData())
                }
              />
              {errors.content && touched.content && (
                <div className='text-danger'>
                  <small>{errors.content}</small>
                </div>
              )}
            </div>
            <button className='btn btn-primary' type='submit'>
              {testimony ? 'Actualizar' : 'Crear'}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default TestimonyForm;
