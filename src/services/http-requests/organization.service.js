import axiosInstance from './axios.instance';

const getOrganizationData = () => axiosInstance.get('organizations/1/public');
const updateOrganizationInfo = data =>
  axiosInstance.patch('organizations/1/public', data);

export default { getOrganizationData, updateOrganizationInfo };
