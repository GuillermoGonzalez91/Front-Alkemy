import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Container, Button, Alert } from 'react-bootstrap';

export default function BackofficeEdit() {
  const [validated, setValidated] = useState(false);
  const [validField, setValidField] = useState(true);

  const fileInput = React.createRef();

  const history = useHistory();

  const submitUpdateBackoffice = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      // Error en editar
      if (fileInput.current.files[0] === undefined) {
        setValidField(false);
      }
      setValidated(true);
    } else {
      // Se edito correctamente
      history.push('/backoffice');
    }
  };

  const redirectBackoffice = () => {
    history.push('/backoffice');
  };

  return (
    <>
      <Container className='mt-5'>
        <h2 className='mb-4'>Editar Backoffice</h2>
        <Form
          noValidate
          validated={validated}
          onSubmit={submitUpdateBackoffice}
        >
          <Form.Group controlId='formGroupEmail'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' placeholder='Nombre' required />
            <Form.Control.Feedback type='invalid'>
              Es requerido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.File
              id='exampleFormControlFile1'
              label='Logo'
              required
              ref={fileInput}
            />
            {!validField ? (
              <Alert key={'danger'} variant={'danger'} className='mt-2'>
                Es requirido
              </Alert>
            ) : null}
          </Form.Group>
          <Button type='submit' variant='primary' className='mr-2'>
            Editar
          </Button>
          <Button variant='primary' onClick={() => redirectBackoffice()}>
            Cancelar
          </Button>
        </Form>
      </Container>
    </>
  );
}
