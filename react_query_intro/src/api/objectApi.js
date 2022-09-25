import axios from 'axios';

const objectsApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const getObjects = async () => {
  const response = await objectsApi.get('/objects');
  return response.data;
};

export const addObject = async object => {
  return await objectsApi.post('/objects', object);
};

export const updateObject = async object => {
  return await objectsApi.patch(`/objects/${object.id}`, object);
};

export const deleteObject = async ({ id }) => {
  return await objectsApi.delete(`/objects/${id}`, id);
};

export default objectsApi;
