import axiosInstance from './axios.instance';

const getTestimonials = () => axiosInstance.get('testimonials');

const createTestimonials = testimony =>
  axiosInstance.get('testimonials', testimony);

const getTestimonyById = (id, testimony) =>
  axiosInstance.get(`testimonials/${id}`, testimony);

const updateTestimony = (id, testimony) =>
  axiosInstance.put(`testimonials/${id}`, testimony);

const deleteTestimony = id => axiosInstance.delete(`testimonials/${id}`);

export default {
  getTestimonials,
  createTestimonials,
  getTestimonyById,
  updateTestimony,
  deleteTestimony,
};
