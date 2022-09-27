import { useQuery, useMutation, useQueryClient } from "react-query"
import { getModelGroup, addModel, getModel, updateModel, deleteModel } from "../../api/modelGroupApi"

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

import { TrashCan, Save, Edit } from '@carbon/icons-react';

const headers = [
    {
        key: 'modelName',
        header: 'ModelGroupName',
    },
    {
        key: 'createdDate',
        header: 'CreatedDate',
    },
    {
        key: 'savedBy',
        header: 'SavedBy',
    },
    {
        key: 'modelType',
        header: 'ModelType',
    },
    {
        key: 'fileName',
        header: 'FileName',
    },
    {
        key: 'filePath',
        header: 'FilePath',
    },
    {
        key: 'maxSize',
        header: 'MaxSize',
    },
];    

const ManageModelGroup = () => {
    const [newModelName, setNewModelName] = useState('')
    const [newModelType, setNewModelType] = useState('')
    const [newModelFilePath, setNewModelFilePath] = useState('')
    const [newModelFileName, setNewModelFileName] = useState('')
    const queryClient = useQueryClient()
    const [success, setSuccess] = useState(false);
    
    // const id = 'default'
    // const {isLoading,isError,error, data: default_ModelGroup} = useQuery(["ModelGroups", { id }], (id) =>
    //     getModelGroup(id))
    const model_group_id = 'MyModuleGroup';
    const { isLoading, isError, error, data: model_group } = useQuery(
        'ModelGroups',
        () => getModelGroup(model_group_id),
        {
          //select: data => data.sort(a => a.id),
        }
      );

    //   const { isLoading, isError, error, data: model_groups } = useQuery(
    //     'ModelGroups',
    //     () => getModel(model_group_id, model_id),
    //     {
    //       select: data => data.sort(a => a.id),
    //     }
    //   );

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

    const batchActionOpenClick = selectedRows => {
        console.log('open clicked', selectedRows);
      };
      const batchActionEditClick = selectedRows => {
        console.log('Edit clicked', selectedRows);
      };
      const batchActionDeleteClick = selectedRows => {
        console.log('Delete clicked', selectedRows);
      };

    //   {
    //     "id": "Model3",
    //     "modelName": "Model3",
    //     "createdDate": "26/8/2022",
    //     "savedBy": "Seema",
    //     "modelType": "PDF",
    //     "fileName": "PDF-File",
    //     "filePath": "c://temp/model1",
    //     "maxSize": "500 MB"
    //   },
      const handleModelCreation = (e) => {
        console.log('handleModelCreation clicked', e);
        e.preventDefault()
        addModelMutation.mutate(model_group_id,
            { 
                id: newModelName,
                modelName: newModelName,
                createdDate: '25/9/2022',
                savedBy: 'IBM Orchestrator',
                modelType: newModelType,
                fileName: newModelFileName,
                filePath: newModelFilePath,
                maxSize: "500 MB"
            }
        )
        setNewModelName('')
        setNewModelFileName('')
        setNewModelFilePath('')
        setNewModelType('')
        console.log('handleModelCreation completed', e);
    }    
    
      const newItemSection = (
        <Form onSubmit={handleModelCreation}>
          <Stack>
            <TextInput
              id="newModelGroupName"
              labelText="Model Group Name:"
              value={model_group_id}
            />
            <TextInput
              id="newModelName"
              required
              warnText="Model name required"
              invalidText="Invalid error message."
              labelText="Key in new Model name to create new one"
              value={newModelName}
              onChange={e => setNewModelName(e.target.value)}
            />
            <TextInput
              id="newModelType"
              required
              warnText="Model Type required"
              invalidText="Invalid error message."
              labelText="Key in Model Type to create new one"
              value={newModelType}
              onChange={e => setNewModelType(e.target.value)}
            />
            <TextInput
              id="newModelFilePath"
              required
              warnText="Model File Path required"
              invalidText="Invalid error message."
              labelText="Key in Model File Path to create new one"
              value={newModelFilePath}
              onChange={e => setNewModelFilePath(e.target.value)}
            />
            <TextInput
              id="newModelFileName"
              required
              warnText="Model File Name required"
              invalidText="Invalid error message."
              labelText="Key in Model File Name to create new one"
              value={newModelFileName}
              onChange={e => setNewModelFileName(e.target.value)}
            />
            <Button
              className="newObject-button"
              kind="primary"
              tabIndex={0}
              type="submit">
              Create New Model
            </Button>
          </Stack>
        </Form>
      );
    
      let modelsTable;
      if (isLoading) {
        modelsTable = <p>Loading...</p>;
      } else if (isError) {
        modelsTable = <p>{error.message}</p>;
      } else {
        // objectTable = <p> loaded success</p>
        modelsTable = (
          <DataTable
            rows={model_group["Models"]}
            headers={headers}
            render={({
              rows,
              headers,
              getHeaderProps,
              getSelectionProps,
              getBatchActionProps,
              onInputChange,
              selectedRows,
            }) => (
              <TableContainer title="Current Available Models">
                <TableToolbar>
                  <TableBatchActions {...getBatchActionProps()}>
                    <TableBatchAction
                      renderIcon={Save}
                      onClick={batchActionOpenClick(selectedRows)}>
                      Open
                    </TableBatchAction>
                    <TableBatchAction
                      renderIcon={Edit}
                      onClick={batchActionEditClick(selectedRows)}>
                      Edit
                    </TableBatchAction>
                    <TableBatchAction
                      renderIcon={TrashCan}
                      onClick={batchActionDeleteClick(selectedRows)}>
                      Delete
                    </TableBatchAction>
                  </TableBatchActions>
                  <TableToolbarSearch onChange={onInputChange} />
                  <TableToolbarContent>
                    <TableToolbarAction iconName="edit" iconDescription="Edit" />
                  </TableToolbarContent>
                </TableToolbar>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableSelectAll {...getSelectionProps()} />
                      {headers.map((header, i) => (
                        <TableHeader key={i} {...getHeaderProps({ header })}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id}>
                        <TableSelectRow {...getSelectionProps({ row })} />
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          />
        );
      }
      return (
        <div>
          {newItemSection}
          {modelsTable}
        </div>
      );
};
export default ManageModelGroup