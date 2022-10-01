import React from 'react';
import { Button, DataTable } from '@carbon/react';
import { iconDownload, iconEdit, iconOpen } from '@carbon/icons';
import './_view-model-group.scss';

import modelGroupRows from '../../features/ModelGroups/ManageModelGroups';

//import { action } from '@storybook/addon-actions';
const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableSelectAll,
  TableSelectRow,
  TableToolbar,
  TableBatchActions,
  TableBatchAction,
  TableToolbarSearch,
  TableToolbarContent,
  TableToolbarAction,
} = DataTable;

//const batchActionClick = selectedRows => () => action('batch action click')(selectedRows);

const initialRows = [
  {
    id: 'a',
    modelGroupName: 'Model Group1',
    createdDate: '26/8/2022',
    savedBy: 'Seema',
  },
  {
    id: 'b',
    modelGroupName: 'Model Group2',
    createdDate: '27/8/2022',
    savedBy: 'Seema',
  },
  {
    id: 'c',
    modelGroupName: 'Model Group3',
    createdDate: '28/8/2022',
    savedBy: 'Seema',
  },
];

const headers = [
  {
    key: 'modelGroupName',
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
];

/*
class ViewModelGroup extends React.Component {
  handleSelectAll = selectAll => () => {
    selectAll();
  };
  render() {
    return (
      <DataTable
        rows={initialRows}
        headers={headers}
        render={({
        rows,
        headers,
        getHeaderProps,
        getSelectionProps,
        getBatchActionProps,
        onInputChange,
        /* the selected rows are provided as a render prop *
        selectedRows,
        }) => (
          <TableContainer title="DataTable with batch actions">
            <TableToolbar>
              {/* make sure to apply getBatchActionProps so that the bar renders *}
                <TableBatchActions {...getBatchActionProps()}>
                {/* inside of you batch actinos, you can include selectedRows *}
                <TableBatchAction onClick={batchActionClick(selectedRows)}>
                  Ghost
                </TableBatchAction>
                <TableBatchAction onClick={batchActionClick(selectedRows)}>
                  Ghost
                </TableBatchAction>
                <TableBatchAction onClick={batchActionClick(selectedRows)}>
                  Ghost
                </TableBatchAction>
              </TableBatchActions>
              <TableToolbarSearch onChange={onInputChange} />
              <TableToolbarContent>
                <TableToolbarAction
                  icon={iconDownload}
                  iconDescription="Download"
                  onClick={action('TableToolbarAction - Download')}
                />
                <TableToolbarAction
                  icon={iconEdit}
                  iconDescription="Edit"
                  onClick={action('TableToolbarAction - Edit')}
                />
                <TableToolbarAction
                  icon={iconOpen}
                  iconDescription="Edit"
                  onClick={action('TableToolbarAction - Open')}
                />
                <Button onClick={action('Add new row')} small kind="primary">
                  Add new
                </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
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
}
*/
class ViewModelGroup extends React.Component {
  handleSelectAll = selectAll => () => {
    selectAll();
  };
  render() {
    return (
      <DataTable
        rows={initialRows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getSelectionProps,
          selectAll,
        }) => (
          <React.Fragment>
            <Button onClick={this.handleSelectAll(selectAll)}>
              Seleact All
            </Button>
            <TableContainer title="MANAGE MODEL GROUPS ">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map(header => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                    <TableHeader />
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
          </React.Fragment>
        )}
      />
    );
  }
}

export default ViewModelGroup;
