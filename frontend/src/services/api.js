import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT || 3001}`,
});

export const postAPI = async (url, data) => {
  const response = await api.post(url, data);
  return response;
};