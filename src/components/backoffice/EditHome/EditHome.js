import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import organizationService from '../../../services/http-requests/organization.service';
import sliderService from '../../../services/http-requests/slider.service';

import { validateEditHomeInput } from '../../../utils/validateInput';

import './EditHome.css';

export default function EditHome({ welcomeText, slides, setSlides }) {
  const history = useHistory();

  return (
    <>
      {slides.length && (
        <Formik
          initialValues={{
            welcomeText: welcomeText && welcomeText,
            slideOne: slides && slides[0],
            slideTwo: slides && slides[1],
            slideThree: slides && slides[2],
          }}
          validationSchema={validateEditHomeInput}
          onSubmit={async values => {
            const data1 = { welcomeText: values.welcomeText };

            const formData1 = new FormData();
            formData1.append('text', values.slideOne.text);
            formData1.append('image', values.slideOne.imageUrl);

            const formData2 = new FormData();
            formData2.append('text', values.slideTwo.text);
            formData2.append('image', values.slideTwo.imageUrl);

            const formData3 = new FormData();
            formData3.append('text', values.slideThree.text);
            formData3.append('image', values.slideThree.imageUrl);

            const res = await Promise.all([
              organizationService.updateOrganizationInfo(data1),
              sliderService.updateSlider(1, formData1),
              sliderService.updateSlider(2, formData2),
              sliderService.updateSlider(3, formData3),
            ]);
            if (res.length) history.push('/');
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
            <div className='container pt-5 pb-5 px-3'>
              <div className='edit-form'>
                <h1 className='text-center pb-4'>Editar Inicio</h1>
                <form
                  onSubmit={handleSubmit}
                  autoComplete='off'
                  encType='multipart/form-data'
                >
                  <div className='form-group'>
                    <h5>Texto de bienvenida</h5>
                    <textarea
                      className='form-control'
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name='welcomeText'
                      style={{ height: 200 }}
                      value={values.welcomeText}
                      // defaultValue={welcomeText}
                    />
                    {errors.welcomeText && touched.welcomeText && (
                      <div className='text-danger'>
                        <small>{errors.welcomeText}</small>
                      </div>
                    )}
                  </div>
                  <div className='form-group'>
                    <h5 className='pb-2'>Slides</h5>
                    <div style={{ paddingBottom: 25 }}>
                      <input
                        name='slideOne.text'
                        onChange={handleChange}
                        type='text'
                        value={values.slideOne.text}
                        className='form-control'
                        placeholder='Text'
                      />
                      <input
                        accept='.jpg,.png'
                        alt='image'
                        name='slideOne.imageUrl'
                        onChange={e =>
                          (values.slideOne.imageUrl = e.target.files[0])
                        }
                        type='file'
                        className='pt-2 form-control-file'
                        required
                      />
                      {errors.slideOne && (
                        <div className='text-danger'>
                          <small>{errors.slideOne.imageUrl}</small>
                        </div>
                      )}
                    </div>
                    <div style={{ paddingBottom: 25 }}>
                      <input
                        name='slideTwo.text'
                        onChange={handleChange}
                        type='text'
                        value={values.slideTwo.text}
                        className='form-control'
                        placeholder='Text'
                      />
                      <input
                        accept='.jpg,.png'
                        alt='image'
                        name='slideTwo.imageUrl'
                        onChange={e =>
                          (values.slideTwo.imageUrl = e.target.files[0])
                        }
                        type='file'
                        className='pt-2 form-control-file'
                        required
                      />
                      {errors.slideTwo && (
                        <div className='text-danger'>
                          <small>{errors.slideTwo.imageUrl}</small>
                        </div>
                      )}
                    </div>
                    <div style={{ paddingBottom: 15 }}>
                      <input
                        name='slideThree.text'
                        onChange={handleChange}
                        type='text'
                        value={values.slideThree.text}
                        className='form-control'
                        placeholder='Text'
                      />
                      <input
                        accept='.jpg,.png'
                        alt='image'
                        name='slideThree.imageUrl'
                        onChange={e =>
                          (values.slideThree.imageUrl = e.target.files[0])
                        }
                        type='file'
                        className='pt-2 form-control-file'
                        required
                      />
                      {errors.slideThree && (
                        <div className='text-danger'>
                          <small>{errors.slideThree.imageUrl}</small>
                        </div>
                      )}
                    </div>
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Guardar
                  </button>
                </form>
              </div>
            </div>
          )}
        </Formik>
      )}
    </>
  );
}
