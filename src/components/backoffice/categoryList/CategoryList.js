import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import categoryService from '../../../services/http-requests/category.service';

import './CategoryList.css';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  const history = useHistory();

  useEffect(() => {
    categoryService
      .getCategories()
      .then(res => setCategories(res.data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = id => {
    categoryService
      .deleteCategory(id)
      .then(() => setCategories([...categories.filter(c => c.id !== id)]))
      .catch(err => console.error(err));
  };

  return (
    <>
      <div className='categories-list mt-5'>
        <h1 className='categories-title'>Lista de categorias</h1>
        <ul>
          {categories.map(({ id, name }) => (
            <li key={id}>
              <span>{name}</span>
              <section className='actions'>
                <button
                  onClick={() => history.push(`/backoffice/categorias/${id}`)}
                >
                  <i className='fas fa-pen-square'></i>
                </button>
                <button onClick={() => handleDelete(id)}>
                  <i className='fas fa-trash'></i>
                </button>
              </section>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
