import axios from 'axios';

const proceduresApi = axios.create({
//   baseURL: 'http://localhost:3500',
    baseURL: 'https://0ffbf397-9bc4-4e51-a6e9-f079df33d632.mock.pstmn.io'
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
