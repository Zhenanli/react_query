import axios from 'axios';

const proceduresApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const getProcedures = async (objectid) => {
  const response = await proceduresApi.get(`/objects/${objectid}/procedures`);
  return response.data;
};

export const addProcedure = async (procedure,objectid) => {
  return await proceduresApi.post(`/objects/${objectid}/procedures`, procedure);
};

export const updateProcedure = async (procedure,objectid) => {
  return await proceduresApi.patch(`/objects/${objectid}/procedures/${procedure.id}`, procedure);
};

export const deleteProcedure = async ({ id }, objectid) => {
  return await proceduresApi.delete(`/objects/${objectid}/procedures/${id}`, id);
};

export default proceduresApi;
