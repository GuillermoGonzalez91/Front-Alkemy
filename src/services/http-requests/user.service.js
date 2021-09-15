import axiosInstance from './axios.instance';

const getUserBoard = () => axiosInstance.get('users/auth/me');

const getUserById = id => axiosInstance.get(`users/${id}`);

const getUsers = () => axiosInstance.get('users');

const updateUser = (id, body) => axiosInstance.put(`users/${id}`, body);

const deleteUser = id => axiosInstance.delete(`users/${id}`);

export default {
  getUsers,
  getUserById,
  getUserBoard,
  updateUser,
  deleteUser,
};
