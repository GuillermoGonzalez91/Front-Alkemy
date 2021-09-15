import axiosInstance from './axios.instance';

const getNews = () => axiosInstance.get('news');

const getNewsById = id => axiosInstance.get(`news/${id}`);

const createNews = data => axiosInstance.post('news', data);

const updateNews = (id, data) => axiosInstance.put(`news/${id}`, data);

const deleteNews = id => axiosInstance.delete(`news/${id}`);

export default {
  createNews,
  deleteNews,
  getNews,
  getNewsById,
  updateNews,
};
