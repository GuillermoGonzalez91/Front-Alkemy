import axiosInstance from './axios.instance';

const getMembers = () => axiosInstance.get('members');

export default { getMembers };
