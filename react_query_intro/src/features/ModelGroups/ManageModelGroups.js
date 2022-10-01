import { useQuery, useMutation, useQueryClient } from "react-query"
import { 
    getModelGroups,
    updateModelGroup,
    deleteModelGroup 
} from "../../api/modelGroupApi"

import { useState } from 'react';

import React from 'react';
import {
  Button,
  DataTable,
  Form,
  Stack,
  TextInput,
  // TableContainer, TableToolbar, TableBody, TableToolbarMenu, TableBatchAction, TableBatchActions, TableToolbarAction, TableToolbarContent, TableToolbarSearch, Table,
  // TableHead,
  // TableRow,
  // TableCell,
  // TableHeader,
  // TableSelectAll,
  // TableSelectRow
} from '@carbon/react';

import { TrashCan, Save, Edit } from '@carbon/icons-react';

// import '../..content/ViewProcedures/_view-procedures.scss';

const {
  Table,
  TableBatchAction,
  TableBatchActions,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandHeader,
  TableExpandRow,
  TableExpandedRow,
  TableHead,
  TableHeader,
  TableRow,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
} = DataTable;

const action = s => {};

const headers = [
    {
      key: 'modelGroupName',
      header: 'ModelGroupName',
    },
    {
        key: 'modelGroupDesc',
        header: 'ModelGroupDesc',
    },
    {
      key: 'createdDate',
      header: 'CreatedDate',
    },
    {
      key: 'savedBy',
      header: 'SavedBy',
    },
  ];

  const ManageModelGroups = () => {
    const queryClient = useQueryClient()

    const {isLoading,isError,error, data: ModelGroups} = useQuery(
    'ModelGroups', 
    getModelGroups, 
    {
        select: data => data.sort((a) => a.id)
    })

    const updateModelGroupMutation = useMutation(updateModelGroup, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroups")
        }
    })

    const deleteModelGroupMutation = useMutation(deleteModelGroup, {
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

    let modelGroupTable;
    if (isLoading) {
        modelGroupTable = <p>Loading...</p>;
    } else if (isError) {
        modelGroupTable = <p>{error.message}</p>;
    } else {
        modelGroupTable = (
        <DataTable
            rows={ModelGroups}
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
            <TableContainer>
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
            {modelGroupTable}
        </div>
    );
};
export default ManageModelGroups

