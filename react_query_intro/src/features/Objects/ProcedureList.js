import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getProcedures,
  addProcedure,
  updateProcedure,
  deleteProcedure,
} from '../../api/procedureApi';

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
    key: 'procedureName',
    header: 'ProcedureName',
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

const ProcedureList = objectid => {
  const [newProcedure, setNewProcedure] = useState('');
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data: procedures } = useQuery(
    'procedures',
    () => getProcedures(objectid),
    {
      select: data => data.sort(a => a.id),
    }
  );

  const addProcedureMutation = useMutation(addProcedure, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries('procedures');
    },
  });

  const updateProcedureMutation = useMutation(updateProcedure, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries('procedures');
    },
  });

  const deleteProcedureMutation = useMutation(deleteProcedure, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries('procedures');
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    addProcedureMutation.mutate({
      id: newProcedure,
      procedureName: newProcedure,
      createdDate: Date().toLocaleDateString(),
      savedBy: 'user1',
    });
    setNewProcedure('');
  };

  const batchActionOpenClick = selectedRows => {
    console.log('open clicked', selectedRows);
  };
  const batchActionEditClick = selectedRows => {
    console.log('Edit clicked', selectedRows);
  };
  const batchActionDeleteClick = selectedRows => {
    console.log('Delete clicked', selectedRows);
  };

  const newItemSection = (
    <Form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          id="newProcedureName"
          required
          warnText="Procedure name required"
          invalidText="Invalid error message."
          labelText="Key in new procedure name to create new one"
          value={newProcedure}
          onChange={e => setNewProcedure(e.target.value)}
        />
        <Button
          className="newProcedure-button"
          kind="primary"
          tabIndex={0}
          type="submit">
          Create new procedure
        </Button>
      </Stack>
    </Form>
  );

  let procedureTable;
  if (isLoading) {
    procedureTable = <p>Loading...</p>;
  } else if (isError) {
    procedureTable = <p>{error.message}</p>;
  } else {
    // procedureTable = <p> loaded success</p>
    procedureTable = (
      <DataTable
        rows={procedures}
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
          <TableContainer title="Current Available Procedures">
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

                {/* <Button small kind="primary">
                                Add new
                            </Button> */}
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
      {/* <h1>Procedure List</h1> */}

      {procedureTable}
      {newItemSection}
      {/* {procedures} */}
    </div>
  );
};
export default ProcedureList;
