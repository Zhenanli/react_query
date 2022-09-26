import { useQuery, useMutation, useQueryClient } from 'react-query';
import {
  getObjects,
  addObject,
  updateObject,
  deleteObject,
} from '../../api/objectApi';

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
    key: 'objectName',
    header: 'ObjectName',
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

const ObjectList = () => {
  const [newObject, setNewObject] = useState('');
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data: objects } = useQuery(
    'objects',
    getObjects,
    {
      select: data => data.sort(a => a.id),
    }
  );

  const addObjectMutation = useMutation(addObject, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries('objects');
    },
  });

  const updateObjectMutation = useMutation(updateObject, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries('objects');
    },
  });

  const deleteObjectMutation = useMutation(deleteObject, {
    onSuccess: () => {
      // Invalidates cache and refetch
      queryClient.invalidateQueries('objects');
    },
  });

  const handleSubmit = e => {
    e.preventDefault();
    addObjectMutation.mutate({
      id: newObject,
      objectName: newObject,
      createdDate: '26/9/2022',
      savedBy: 'user1',
    });
    setNewObject('');
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
          id="newObjectName"
          required
          warnText="Object name required"
          invalidText="Invalid error message."
          labelText="Key in new object Name to create new one"
          value={newObject}
          onChange={e => setNewObject(e.target.value)}
        />
        <Button
          className="newObject-button"
          kind="primary"
          tabIndex={0}
          type="submit">
          Create new object
        </Button>
      </Stack>
    </Form>
  );

  let objectTable;
  if (isLoading) {
    objectTable = <p>Loading...</p>;
  } else if (isError) {
    objectTable = <p>{error.message}</p>;
  } else {
    // objectTable = <p> loaded success</p>
    objectTable = (
      <DataTable
        rows={objects}
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
          <TableContainer title="Current Available Objects">
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
      {/* <h1>Object List</h1> */}

      {objectTable}
      {newItemSection}
      {/* {objects} */}
    </div>
  );
};
export default ObjectList;
