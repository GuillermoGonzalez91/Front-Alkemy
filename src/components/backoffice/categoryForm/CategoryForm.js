import React, { useState } from 'react';
import { Formik } from 'formik';

import categoryService from '../../../services/http-requests/category.service';

import { validateCategoryFormInput } from '../../../utils/validateInput';

import './CategoryForm.css';

const initialValues = {
  name: '',
  description: '',
};

export default function CategoryForm({ category }) {
  return (
    <Formik
      initialValues={category ? category : initialValues}
      validationSchema={validateCategoryFormInput}
      onSubmit={async values => {
        const newValues = {
          name: values.name,
          description: values.description,
        };
        try {
          category
            ? await categoryService.updateCategory(category.id, newValues)
            : await categoryService.createCategory(newValues);
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
        touched,
        values,
      }) => (
        <div className='container pt-5 category-form'>
          <h1 className='text-center pb-4 category-form-title'>
            {category ? 'Actualizar categoría' : 'Crear categoría'}
          </h1>
          <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='form-group'>
              <label>Nombre:</label>
              <input
                className='form-control'
                onBlur={handleBlur}
                onChange={handleChange}
                name='name'
                type='text'
                value={values.name}
              />
              {errors.name && touched.name && (
                <div className='text-danger'>{errors.name}</div>
              )}
            </div>
            <div className='form-group'>
              <label>Descripción:</label>
              <input
                className='form-control'
                onBlur={handleBlur}
                onChange={handleChange}
                name='description'
                type='text'
                value={values.description}
              />
              {errors.description && touched.description && (
                <div className='text-danger'>{errors.description}</div>
              )}
            </div>
            <button className='btn btn-primary' type='submit'>
              {category ? 'Actualizar' : 'Crear'}
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}
