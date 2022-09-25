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

import{TrashCan16, Save16, Download16} from '@carbon/icons'
const batchActionClick = (selectedRows)=>{}

const action = (s) =>{}

const NewModelGroup = () => {
    const [newModelGroupName, setNewModelGroupName] = useState('')
    const [newModelGroupDesc, setNewModelGroupDesc] = useState('')
    const queryClient = useQueryClient()

    const {isLoading,isError,error, data: ModelGroup} = useQuery(
        'ModelGroup', 
        getModelGroup, 
        {
            select: data => data.sort((a) => a.id)
        })

    const addModelGroupMutation = useMutation(addModelGroup, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroups")
        }
    })

    const handleSubmit = (e) => {
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
    }

    const newModelGroupSelection = (
        <Form onSubmit={handleSubmit}>
            <Grid className="add-model-group-page" fullWidth>
            <Column lg={16} md={8} sm={4} className="add-model-group-page__r2">
                <Grid className="add-model-group-page-content">
                <Column md={4} lg={7} sm={4} className="add-model-group-page">
                    <Form onSubmit={handleSubmit}>
                    <Stack gap={7}>
                        <TextInput
                        helperText="Enter Model Group Name (Mandatory)!"
                        id="model_name"
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
                        <Button className="CreateModelGroup" kind="primary" tabIndex={0} type="create_model_group" >
                        Create Model Group
                        </Button>
                    </Stack>
                    </Form>
                </Column>
                </Grid>
            </Column>
            </Grid>
        </Form>
      )  

    return (
        <div>
            {newModelGroupSelection}
        </div>
    )
}
export default NewModelGroup