import axios from 'axios';

const orchestratorApi = axios.create({
  // baseURL: 'http://localhost:3500',
  baseURL: 'https://0ffbf397-9bc4-4e51-a6e9-f079df33d632.mock.pstmn.io',
});

export const getObjects = async () => {
  const response = await orchestratorApi.get('/objects');
  return response.data;
};

export const addObject = async object => {
  return await orchestratorApi.post('/objects', object);
};

export const updateObject = async object => {
  return await orchestratorApi.patch(`/objects/${object.id}`, object);
};

export const deleteObject = async ({ id }) => {
  return await orchestratorApi.delete(`/objects/${id}`, id);
};

export const getProcedures = async ({objectid}) => {
  const response = await orchestratorApi.get(`/objects/${objectid}/procedures`, objectid);
  return response.data;
};
  
  export const addProcedure = async (procedure,objectid) => {
    return await orchestratorApi.post(`/objects/${objectid}/procedures`, procedure);
  };
  
  export const updateProcedure = async (procedure,objectid) => {
    return await orchestratorApi.patch(`/objects/${objectid}/procedures/${procedure.id}`, procedure);
  };
  
  export const deleteProcedure = async ({ id }, objectid) => {
    return await orchestratorApi.delete(`/objects/${objectid}/procedures/${id}`, id);
  };

  export const getModelGroups = async () => {
    const response = await orchestratorApi.get('/ModelGroups');
    return response.data;
  };
  
  export const addModelGroup = async (model_group) => {
    return await orchestratorApi.post('/ModelGroups', model_group);
  };
  
  export const updateModelGroup = async (model_group) => {
    return await orchestratorApi.patch(`/ModelGroups/${model_group.id}`, model_group);
  };
  
  export const deleteModelGroup = async (model_group_id) => {
    return await orchestratorApi.delete(`/ModelGroups/${model_group_id}`, model_group_id);
  };

  export const getModelGroup = async (model_group_id) => {
    const response = await orchestratorApi.get(`/ModelGroups/${model_group_id}`, model_group_id);
    return response.data;
  }

  export const getModels = async (model_group_id) => {
    const response = await orchestratorApi.get(`/ModelGroups/${model_group_id}/Models`, model_group_id);
    return response.data;
  }

   export const addModel = async (model_group_id,model) => {
    return await orchestratorApi.post(`/ModelGroups/${model_group_id}/Models/`,model);
    };
    
    export const updateModel = async (model_group_id, model) => {
    return await orchestratorApi.patch(`/ModelGroups/${model_group_id}/Models/${model.id}`, model);
    };
    
    export const deleteModel = async ({ model_group_id, model_id }) => {
    return await orchestratorApi.delete(`/ModelGroups/${model_group_id}/Models/${model_id}`, model_group_id, model_id);
    };

    export const getModel = async ({ model_group_id, model_id }) => {
        return await orchestratorApi.get(`/ModelGroups/${model_group_id}/Models/${model_id}`, model_group_id, model_id);
    };
  
    export default orchestratorApi