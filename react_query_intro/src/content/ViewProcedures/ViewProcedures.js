import React from 'react';
import { Button, DataTable } from '@carbon/react';
import { iconDownload, iconEdit, iconOpen } from '@carbon/icons';
import './_view-procedures.scss';

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
    procedureName: 'Procedure 1',
    numModels: 2,
    author: 'System',
    createdDate: '26/8/2022',
    lastUpdated: '28/8/2022',
  },
  {
    id: 'b',
    procedureName: 'Procedure 2',
    numModels: 2,
    author: 'System',
    createdDate: '26/8/2022',
    lastUpdated: '28/8/2022',
  },
  {
    id: 'ca',
    procedureName: 'Procedure 3',
    numModels: 2,
    author: 'System',
    createdDate: '26/8/2022',
    lastUpdated: '28/8/2022',
  },
];

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

class ViewProcedures extends React.Component {
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
            <TableContainer title="MANAGE PROCEDURES ">
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

export default ViewProcedures;
