import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';

import { confirmAlert } from '../../services/alerts/Alerts';
import deleteCategory from '../../services/category.service';

export default function DeleteCategory({ category }) {
  const { id } = category;

  const handleDelete = useCallback(() => {
    confirmAlert().then(resultado => {
      if (resultado) deleteCategory(id);
    });
  }, []);

  return (
    <>
      <Button variant="danger" onClick={handleDelete}>
        Eliminar
      </Button>
    </>
  );
}
