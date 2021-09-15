import React, { useEffect, useState } from 'react';

import categoryService from '../../../services/http-requests/category.service';

import CategoryForm from '../../../components/backoffice/categoryForm/CategoryForm';

export default function UpdateForm(params) {
  const [category, setCategory] = useState('');

  const { id } = params.match.params;

  useEffect(() => {
    categoryService
      .getCategoryByid(id)
      .then(res => {
        setCategory(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return <>{category && <CategoryForm category={category} />}</>;
}
