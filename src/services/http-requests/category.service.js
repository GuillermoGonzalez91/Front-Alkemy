import axiosInstance from './axios.instance';

const getCategories = () => axiosInstance.get('categories');

const getCategoryByid = id => axiosInstance.get(`categories/${id}`);

const createCategory = data => axiosInstance.post('categories', data);

const updateCategory = (id, data) =>
  axiosInstance.put(`categories/${id}`, data);

const deleteCategory = id => axiosInstance.delete(`categories/${id}`);

export default {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryByid,
  updateCategory,
};
