import axiosInstance from './axios.instance';

const getActivities = () => axiosInstance.get('activities');
const getActivityById = id => axiosInstance.get(`activities/${id}`);
const updateActivity = (id, updatedActivity) =>
  axiosInstance.put(`activities/${id}`, updatedActivity);
const createActivity = activity => axiosInstance.post('activities', activity);
const deleteActivity = id => axiosInstance.delete(`activities/${id}`);

export default {
  createActivity,
  getActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
};
