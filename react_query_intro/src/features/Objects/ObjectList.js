import { useQuery, useMutation, useQueryClient } from "react-query"
import { getObjects, addObject, updateObject, deleteObject } from "../../api/objectApi"

import { useState } from 'react'

import React from 'react';
import { Button, DataTable, Form, Stack, TextInput,TableContainer,TableToolbar,TableBody,TableToolbarMenu,TableBatchAction,TableBatchActions,TableToolbarAction,TableToolbarContent,TableToolbarSearch, Table,
    TableHead,
    TableRow,
    TableCell,
    TableHeader,
    TableSelectAll,
    TableSelectRow} from '@carbon/react';

import{TrashCan16, Save16, Download16} from '@carbon/icons'

// import '../..content/ViewProcedures/_view-procedures.scss';

const batchActionClick = (selectedRows)=>{

}

const action = (s) =>{

}

const headers = [
    {
        key: 'procedureName',
        header: 'ProcedureName',
    },
    {
        key: 'numModels',
        header: 'NumModels',
    },
    {
        key: 'author',
        header: 'Author',
    },
    {
        key: 'createdDate',
        header: 'CreatedDate',
    },
    {
        key: 'lastUpdated',
        header: 'LastUpdated',
    },
];

const ObjectList = () => {
    const [newObject, setNewObject] = useState('')
    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data: objects
    } = useQuery('objects', getObjects, {
        select: data => data.sort((a) => a.id)
    })

    const addObjectMutation = useMutation(addObject, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("objects")
        }
    })

    const updateObjectMutation = useMutation(updateObject, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("objects")
        }
    })

    const deleteObjectMutation = useMutation(deleteObject, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("objects")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addObjectMutation.mutate({ userId: 1, title: newObject, completed: false })
        setNewObject('')
    }

    const newItemSection = (
        <Form onSubmit={handleSubmit}>
            <Stack>
                <TextInput
                    id="newObjectName"
                    required
                    warnText="Object name required"
                    invalidText="Invalid error message."
                    labelText="Key in new object Name to create new one">

                </TextInput>
                <Button className="newObject-button"
                    kind="primary"
                    tabIndex={0}
                    type="submit">
                    Create new object
                </Button>
            </Stack>
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
                <DataTable rows={objects} headers={headers}>
                    {({
                        rows,
                        headers,
                        getHeaderProps,
                        getRowProps,
                        getSelectionProps,
                        getToolbarProps,
                        getBatchActionProps,
                        onInputChange,
                        selectedRows,
                        getTableProps,
                        getTableContainerProps,
                    }) => {
                        const batchActionProps = getBatchActionProps();

                        return (
                            <TableContainer
                                title="Objects List"
                                description="All available object from server"
                                {...getTableContainerProps()}>
                                <TableToolbar {...getToolbarProps()}>
                                    <TableBatchActions {...batchActionProps}>
                                        <TableBatchAction
                                            tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                                            renderIcon={TrashCan16}
                                            onClick={batchActionClick(selectedRows)}>
                                            Delete
                                        </TableBatchAction>
                                        <TableBatchAction
                                            tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                                            renderIcon={Save16}
                                            onClick={batchActionClick(selectedRows)}>
                                            Save
                                        </TableBatchAction>
                                        <TableBatchAction
                                            tabIndex={batchActionProps.shouldShowBatchActions ? 0 : -1}
                                            renderIcon={Download16}
                                            onClick={batchActionClick(selectedRows)}>
                                            Download
                                        </TableBatchAction>
                                    </TableBatchActions>
                                    <TableToolbarContent
                                        aria-hidden={batchActionProps.shouldShowBatchActions}>
                                        <TableToolbarSearch
                                            tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                                            onChange={onInputChange}
                                        />
                                        <TableToolbarMenu
                                            tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}>
                                            <TableToolbarAction onClick={() => alert('Alert 1')}>
                                                Action 1
                                            </TableToolbarAction>
                                            <TableToolbarAction onClick={() => alert('Alert 2')}>
                                                Action 2
                                            </TableToolbarAction>
                                            <TableToolbarAction onClick={() => alert('Alert 3')}>
                                                Action 3
                                            </TableToolbarAction>
                                        </TableToolbarMenu>
                                        <Button
                                            tabIndex={batchActionProps.shouldShowBatchActions ? -1 : 0}
                                            onClick={action('Add new row')}
                                            size="small"
                                            kind="primary">
                                            Add new
                                        </Button>
                                    </TableToolbarContent>
                                </TableToolbar>
                                <Table {...getTableProps()}>
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
                                        {rows.map((row, i) => (
                                            <TableRow key={i} {...getRowProps({ row })}>
                                                <TableSelectRow {...getSelectionProps({ row })} />
                                                {row.cells.map((cell) => (
                                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        );
                    }}
                </DataTable>
                </div>
        )};
    };

    return (
        <div>
            {/* <h1>Object List</h1> */}
            {newItemSection}
            {content}
            {objects}
        </div>
    )
}
export default ObjectList