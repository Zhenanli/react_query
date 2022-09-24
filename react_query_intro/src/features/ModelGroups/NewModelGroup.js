import { useQuery, useMutation, useQueryClient } from "react-query"
import { getModelGroups,addModelGroup,updateModelGroup,deleteModelGroup } from "../../api/modelGroupApi"

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

// import '../..content/ViewProcedures/_view-procedures.scss';

const batchActionClick = (selectedRows)=>{

}

const action = (s) =>{

}

const NewModelGroup = () => {
    const [newModelGroupName, setNewModelGroupName] = useState('')
    const [newModelGroupDescription, setNewModelGroupDesc] = useState('')
    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data: ModelGroup
    } = useQuery('ModelGroup', getModelGroups, {
        select: data => data.sort((a) => a.id)
    })

    const addModelGroupMutation = useMutation(addModelGroup, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroup")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addModelGroupMutation.mutate({ ModelGroup: 1, title: newModelGroupName, completed: false })
        setNewModelGroupName('')
    }

    const newModelGroupSelection = (
        <Form onSubmit={handleSubmit}>
            <Grid className="add-model-group-page" fullWidth>
            <Column lg={16} md={8} sm={4} className="add-model-group-page__banner">
                <h1 className="add-model-group-page__heading">
                Model Creation Screen
                </h1>
            </Column>
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
                        value={newModelGroupDescription}
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

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = ()=> {
        return(
                // <article key={object.id}>
                //     <div className="object">
                //         <input
                //             type="checkbox"
                //             checked={object.completed}
                //             id={object.id}
                //             onChange={() =>
                //                 updateObjectMutation.mutate({ ...object, completed: !object.completed })
                //             }
                //         />
                //         <label htmlFor={object.id}>{object.title}</label>
                //     </div>
                //     <button className="trash" onClick={() => deleteObjectMutation.mutate({ id: object.id })}>
                //         <FontAwesomeIcon icon={faTrash} />
                //     </button>
                // </article>
                <div>
                    {ModelGroup}
                </div>
        )};
    };

    return (
        <div>
            {content}            
            {ModelGroup}
        </div>
    )
}
export default NewModelGroup