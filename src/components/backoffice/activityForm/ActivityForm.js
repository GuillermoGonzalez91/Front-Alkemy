import React from 'react';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import activityService from '../../../services/http-requests/activity.service';

import { validateActivitiesFormInput } from '../../../utils/validateInput';

import { useHistory } from 'react-router-dom';

const initialValues = {
  name: '',
  image: '',
  content: '',
};

export default function ActivityForm({ activity }) {
  let history = useHistory();
  return (
    <Formik
      initialValues={activity ? activity : initialValues}
      validationSchema={validateActivitiesFormInput}
      onSubmit={values => {
        const formData = new FormData();
        formData.append('image', values.image);
        formData.append('name', values.name);
        formData.append('content', values.content);

        activity
          ? activityService.updateActivity(activity.id, formData).then(res => {
              alert('La actividad fue actualizada');
              history.push('/backoffice/actividades');
            })
          : activityService.createActivity(formData).then(res => {
              if (res.data.ok) {
                alert('La actividad fue creada exitosamente!');
                history.push('/backoffice/actividades');
              }
            });
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
        <div className='container pt-5 entry-form'>
          <h1 className='text-center pb-4'>
            {activity ? 'Actualizar Actividad' : 'Crear Actividad'}
          </h1>
          <form
            onSubmit={handleSubmit}
            autoComplete='off'
            encType='multipart/form-data'
          >
            <div className='form-group'>
              <label>Name:</label>
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
                onChange={e => (values.image = e.target.files[0])}
                required
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
              {activity ? 'Actualizar' : 'Crear'}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}
