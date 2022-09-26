import axios from 'axios';

const objectsApi = axios.create({
  // baseURL: 'http://localhost:3500',
  baseURL: 'https://0ffbf397-9bc4-4e51-a6e9-f079df33d632.mock.pstmn.io',
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
