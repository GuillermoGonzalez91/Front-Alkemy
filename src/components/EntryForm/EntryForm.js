import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import newsService from '../../services/http-requests/news.service';

import { validateEntryFormInput } from '../../utils/validateInput';

import './EntryForm.css';

const initialValues = {
  name: '',
  image: '',
  content: '',
  category: '',
};

export default function EntryForm({ entry }) {
  const history = useHistory();

  return (
    <Formik
      initialValues={entry ? entry : initialValues}
      validationSchema={validateEntryFormInput}
      onSubmit={async values => {
        const formData = new FormData();
        formData.append('image', values.image);
        formData.append('name', values.name);
        formData.append('content', values.content);
        // formData.append('category', values.category);
        try {
          entry
            ? await newsService.updateNews(entry.id, formData)
            : await newsService.createNews(formData);
          history.push('/novedades');
        } catch (err) {
          console.log(err);
        }
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
            {entry ? 'Actualizar novedad' : 'Crear novedad'}
          </h1>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='form-group'>
              <label>Título:</label>
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
            <div className='form-group'>
              <label>Categoría:</label>
              <select
                className='select'
                name='category'
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value='' label='Select a category' />
                <option value={1} label='Category 1' />
                <option value={2} label='Category 2' />
                <option value={3} label='Category 3' />
              </select>
              {errors.category && touched.category && (
                <div className='text-danger'>
                  <small>{errors.category}</small>
                </div>
              )}
            </div>
            <button className='btn btn-primary' type='submit'>
              {entry ? 'Actualizar' : 'Crear'}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}
