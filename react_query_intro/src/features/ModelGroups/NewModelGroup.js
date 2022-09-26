import { useQuery, useMutation, useQueryClient } from "react-query"
import { addModelGroup, getModelGroup } from "../../api/modelGroupApi"

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
    const queryClient = useQueryClient()
    
    // const id = 'default'
    // const {isLoading,isError,error, data: default_ModelGroup} = useQuery(["ModelGroups", { id }], (id) =>
    //     getModelGroup(id))

    const addModelGroupMutation = useMutation(addModelGroup, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroups")
        }
    })

    const handleSubmit = (e) => {
        console.log('handleSubmit clicked')
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
        console.log('handleSubmit clicked', e);
    }

    const newModelGroupSelection = (
        <Grid className="add-model-group-page-content">
            <Column md={4} lg={7} sm={4} className="add-model-group-page">
                <Form onSubmit={handleSubmit}>
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

    let modelGroupTable;
    // if (isLoading) {
    //     modelGroupTable = <p>Loading...</p>;
    // } else if (isError) {
    //     modelGroupTable = <p>{error.message}</p>;
    // } else {
    //     modelGroupTable = {newModelGroupSelection}
    //     }
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
    return (
        <div>
            {modelGroupTable}
            {newModelGroupSelection}
        </div>
    );
};
export default NewModelGroup