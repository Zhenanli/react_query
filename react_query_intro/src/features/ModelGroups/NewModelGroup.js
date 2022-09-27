import { useQuery, useMutation, useQueryClient } from "react-query"
import { addModelGroup, getModelGroup, addModel, getModel, updateModel, deleteModel } from "../../api/modelGroupApi"

import { useState } from 'react'

import React from 'react';
import { Button, DataTable, Form, Stack, TextInput,TableContainer,TableToolbar,TableBody,TableToolbarMenu,TableBatchAction,TableBatchActions,TableToolbarAction,TableToolbarContent,TableToolbarSearch, Table,
    TableHead,
    TableRow,
    TableCell,
    TableHeader,
    TableSelectAll,
    TableSelectRow,
    Grid,
    Column} from '@carbon/react';

const NewModelGroup = () => {
    const [newModelGroupName, setNewModelGroupName] = useState('')
    const [newModelGroupDesc, setNewModelGroupDesc] = useState('')
    const [newModelName, setNewModelName] = useState('')
    const [newModelType, setNewModelType] = useState('')
    const [updateModelName, setModel] = useState('')
    const queryClient = useQueryClient()
    const [success, setSuccess] = useState(false);
    
    // const id = 'default'
    // const {isLoading,isError,error, data: default_ModelGroup} = useQuery(["ModelGroups", { id }], (id) =>
    //     getModelGroup(id))
    const model_group_id = 'default';
    const { isLoading, isError, error, data: model_groups } = useQuery(
        'ModelGroups',
        () => getModelGroup(model_group_id),
        {
          select: data => data.sort(a => a.id),
        }
      );

    //   const { isLoading, isError, error, data: model_groups } = useQuery(
    //     'ModelGroups',
    //     () => getModel(model_group_id, model_id),
    //     {
    //       select: data => data.sort(a => a.id),
    //     }
    //   );

    const addModelGroupMutation = useMutation(addModelGroup, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroups")
            setSuccess('true')
        }
    })

    const addModelMutation = useMutation(addModel, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroups")
        }
    })

    const updateModelMutation = useMutation(updateModel, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroups")
        }
    })

    const deleteModelMutation = useMutation(deleteModel, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroups")
        }
    })

    const handleModelGroupCreation = (e) => {
        e.preventDefault()
        addModelGroupMutation.mutate(
            { 
                id: newModelGroupName,
                modelGroupName: newModelGroupName,
                modelGroupDesc: newModelGroupDesc,
                createdDate: '25/9/2022',
                savedBy: 'IBM Orchestrator',
            }
        )
        setNewModelGroupName('')
        setNewModelGroupDesc('')
        console.log('handleModelGroupCreation completed', e);        
    }

    const newModelGroupCreation = (
        <Grid className="add-model-group-page-content">
            <Column md={4} lg={7} sm={4} className="add-model-group-page">
                <Form onSubmit={handleModelGroupCreation}>
                    <Stack gap={7}>
                        <TextInput
                        helperText="Enter Model Group Name (Mandatory)!"
                        id="newModelGroup"
                        invalidText="Invalid error message."
                        labelText="Model Group Name:"
                        value={newModelGroupName}
                        onChange={(e) => setNewModelGroupName(e.target.value)}
                        placeholder="ModelGroup1"
                        />
                        <TextInput
                        helperText="Enter Model Group Description!"
                        id="model_description"
                        invalidText="Invalid error message."
                        labelText="Model Group Description:"
                        value={newModelGroupDesc}
                        onChange={(e) => setNewModelGroupDesc(e.target.value)}
                        placeholder="ModelGroup1 will be added to add model and flow details!"
                        />
                        <Button className="newObject-button" kind="primary" tabIndex={0} type="submit">
                        Create Model Group
                        </Button>
                    </Stack>
                </Form>
            </Column>
        </Grid>
     )

    //  {
    //     "id": "Model3",
    //     "modelName": "Model3",
    //     "createdDate": "26/8/2022",
    //     "savedBy": "Seema",
    //     "modelType": "WORD",
    //     "fileName": "Word-File",
    //     "filePath": "c://temp/model1",
    //     "maxSize": "500 MB"
    //   }

     const handleModelCreation = (e) => {
        e.preventDefault()
        addModelMutation.mutate(
            { 
                id: newModelName,
                modelName: newModelName,
                createdDate: '25/9/2022',
                savedBy: 'IBM Orchestrator',
                modelType: "WORD",
                fileName: "Word-File",
                filePath: "c://temp/model1",
                maxSize: "500 MB"
            }
        )
        setNewModelName('')
        console.log('handleModelCreation completed', e);
    }    
     
    const getModelGroup = (
        <Grid className="get-model-group-page-content">
            <Column md={4} lg={7} sm={4} className="get-model-group-page">
            <Form onSubmit={handleModelCreation}>
                    <Stack gap={7}>
                        <TextInput
                        helperText="New Model Group Name:"
                        id={newModelGroupName}
                        invalidText="Invalid error message."
                        labelText="Model Group Name:"
                        value={newModelGroupName}
                        placeholder={newModelGroupName}
                        />
                        <TextInput
                        helperText="Enter Model Name:"
                        id="model_name"
                        invalidText="Invalid error message."
                        labelText="Enter Model Name:"
                        value={newModelName}
                        onChange={(e) => setNewModelName(e.target.value)}
                        placeholder='{newModelName} will be added to {newModelGroupName}'
                        />
                      <Button
                        className="model-creation-button"
                        kind="primary"
                        tabIndex={0}
                        type="submit">
                        Select File Type and Create Model
                      </Button>
                    </Stack>
                  </Form>
            </Column>
        </Grid>
     )

      

     const newModelCreation = (
        <Grid className="add-model-page-content">
            <Column md={4} lg={7} sm={4} className="add-model-page">
                <Form onSubmit={handleModelCreation}>
                    <Stack gap={7}>
                        <TextInput
                        helperText="Specify Model Name (Mandatory)!"
                        id="newModel"
                        invalidText="Invalid error message."
                        labelText="Model Name:"
                        value={newModelName}
                        onChange={(e) => setNewModelName(e.target.value)}
                        placeholder="Model1"
                        />
                        <Button className="newModel-button" kind="primary" tabIndex={0} type="submit">
                        Create Model
                        </Button>
                    </Stack>
                </Form>
            </Column>
        </Grid>
     )

     const handleModelUpdate = (e) => {
        e.preventDefault()
        updateModelMutation.mutate(
            { 
                id: newModelName,
                modelGroupName: newModelName,
                createdDate: '25/9/2022',
                savedBy: 'IBM Orchestrator',
            }
        )
        setNewModelName('')
        console.log('handleModelUpdate completed', e);
    }

     const updateModelSelection = (
        <Grid className="update-model-page-content">
            <Column md={4} lg={7} sm={4} className="update-model-page">
                <Form onSubmit={handleModelUpdate}>
                    <Stack gap={7}>
                        
                        <Button className="newModel-button" kind="primary" tabIndex={0} type="submit">
                        Create Model
                        </Button>
                    </Stack>
                </Form>
            </Column>
        </Grid>
     )  

     const handleModelDelete = (e) => {
        e.preventDefault()
        deleteModelMutation.mutate(
            { 
                id: newModelName,
                modelGroupName: newModelName,
                createdDate: '25/9/2022',
                savedBy: 'IBM Orchestrator',
            }
        )
        setNewModelName('')
        console.log('handleModelDelete completed', e);
    }

     const deleteModelSelection = (
        <Grid className="update-model-page-content">
            <Column md={4} lg={7} sm={4} className="update-model-page">
                <Form onSubmit={handleModelDelete}>
                    <Stack gap={7}>
                        
                        <Button className="newModel-button" kind="primary" tabIndex={0} type="submit">
                        Create Model
                        </Button>
                    </Stack>
                </Form>
            </Column>
        </Grid>
     )  

    let modelGroupTable;
    // if (isLoading) {
    //     modelGroupTable = <p>Loading...</p>;
    // } else if (isError) {
    //     modelGroupTable = <p>{error.message}</p>;
    // } else {
    //     modelGroupTable = {newModelGroupSelection}
    //     }
    if (success)
    {
        <Grid className="add-model-group-page" fullWidth>
            <Column
                lg={16}
                md={8}
                sm={4}
                className="add-model-group-page__banner">
                <h1 className="add-model-group-page__heading">
                Edit/ Add Model Screen
                </h1>
            </Column>
        </Grid>
    }
    else
    {
        modelGroupTable = 
        <Grid className="add-model-group-page" fullWidth>
            <Column
                lg={16}
                md={8}
                sm={4}
                className="add-model-group-page__banner">
                <h1 className="add-model-group-page__heading">
                Model Group Creation Screen
                </h1>
            </Column>
        </Grid>
    }
    
    return (
        <div>
            {modelGroupTable}
            {newModelGroupCreation}
        </div>
    );
};
export default NewModelGroup