import axiosInstance from './axios.instance';

const getContacts = () => axiosInstance.get('contact');

const sendContact = () => axiosInstance.post('contact');

export default { getContacts, sendContact };
