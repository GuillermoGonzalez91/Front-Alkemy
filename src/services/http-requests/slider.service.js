import axiosInstance from './axios.instance';

const getSliders = () => axiosInstance.get('sliders');

const updateSlider = (id, data) => axiosInstance.put(`sliders/${id}`, data);

export default { getSliders, updateSlider };
