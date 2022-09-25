import axios from "axios"

const modelGroupApi = axios.create({
    baseURL: 'http://localhost:3500',
})

export const getModelGroups = async () => {
    const response = await modelGroupApi.get("/ModelGroups")
    return response.data
}

export const addModelGroup = async model_group => {
    return await modelGroupApi.post('/ModelGroups', model_group);
}

export const updateModelGroup = async model_group => {
    return await modelGroupApi.patch('/ModelGroups/${model_group}', model_group);
}

export const deleteModelGroup = async model_group => {
    return await modelGroupApi.delete('/ModelGroups/${model_group.id}',model_group);
}

export const getModelGroup = async ({ model_group_id }) => {
    const response = await modelGroupApi.get('/ModelGroups/${ model_group_id }');
    return response.data
}

// const modelGroupApi = axios.create({
//     // baseURL: "https://8f61f476-3795-4a24-a95d-e05ebee61eac.mock.pstmn.io"
//     baseURL: 'http://localhost:3500',
// })

// export const getModelGroups = async () => {
//     const response = await modelGroupApi.get("/ar-model-library/model-groups")
//     return response.data
// }

// export const getModelGroup = async () => {
//     const response = await modelGroupApi.get("/models/model_groups/:model-group-id")
//     return response.data
// }

// export const addModelGroup = async (model_group) => {
//     return await modelGroupApi.patch(`/orchestrator/${model_group.id}`, model_group)
// }

// export const updateModelGroup = async (model_group) => {
//     return await modelGroupApi.patch(`/orchestrator/${model_group.id}`, model_group)
// }

// export const deleteModelGroup = async ({ model_group_id }) => {
//     return await modelGroupApi.delete(`/orchestrator/${model_group_id}`, model_group_id)
// }

export default modelGroupApi; 