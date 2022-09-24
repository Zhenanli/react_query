import { useQuery, useMutation, useQueryClient } from "react-query"
import { getModelGroups,updateModelGroup,deleteModelGroup } from "../../api/modelGroupApi"
import ViewModelGroup from '../../content/ViewModelGroup';

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
var modelGroupRows = [];

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

  const initialRows = [
    {
      id: 'a',
      modelGroupName: 'Model Group 1',
      createdDate: '26/8/2022',
      savedBy: 'Seema',
    },
    {
      id: 'b',
      modelGroupName: 'Model Group 2',
      createdDate: '27/8/2022',
      savedBy: 'Seema',
    },
    {
      id: 'c',
      modelGroupName: 'Model Group 3',
      createdDate: '28/8/2022',
      savedBy: 'Seema',
    },
  ];

const ModelGroupsList = () => {
    const queryClient = useQueryClient()

    const {
        isLoading,
        isError,
        error,
        data: ModelGroups
    } = useQuery('ModelGroup', getModelGroups, {
        select: data => data.sort((a) => a.id)
    })

    const updateModelGroupMutation = useMutation(updateModelGroup, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroup")
        }
    })

    const deleteModelGroupMutation = useMutation(deleteModelGroup, {
        onSuccess: () => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries("ModelGroup")
        }
    })

    let content
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isError) {
        content = <p>{error.message}</p>
    } else {
        content = ()=> {
            modelGroupRows={ModelGroups}.map((ModelGroup, index) => (
                <tr key={index}>
                    <td>{ModelGroup}</td>
                    <td>'28/8/2022'</td>
                    <td>'seema'</td>
                </tr>
           ))
            }
        // content = ()=> {
        // return (
        //     <DataTable
        //         rows={ModelGroups.map((ModelGroup, index) => (
        //             <tr key={index}>
        //                 <td>'a'</td>
        //                 <td>{ModelGroup}</td>
        //                 <td>'28/8/2022'</td>
        //                 <td>'seema'</td>
        //             </tr>
        //        ))}
        //         headers={headers}
        //         render={({
        //             rows,
        //             headers,
        //             getHeaderProps,
        //             // getSelectionProps,
        //             // selectAll,
        //         }) => (
        //             <React.Fragment>
        //             {/* <Button onClick={this.handleSelectAll(selectAll)}>
        //                 Seleact All
        //             </Button> */}
        //             <TableContainer title="MANAGE MODEL GROUPS ">
        //                 <Table>
        //                 <TableHead>
        //                     <TableRow>
        //                     {headers.map(header => (
        //                         <TableHeader {...getHeaderProps({ header })}>
        //                         {header.header}
        //                         </TableHeader>
        //                     ))}
        //                     <TableHeader />
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {rows.map(row => (
        //                     <TableRow key={row.id}>
        //                         {row.cells.map(cell => (
        //                         <TableCell key={cell.id}>{cell.value}</TableCell>
        //                         ))}
        //                     </TableRow>
        //                     ))}
        //                 </TableBody>
        //                 </Table>
        //             </TableContainer>
        //             </React.Fragment>
        //         )}
        //     />
        // );
        // }
        // content = <ViewModelGroup />
    };

    return (
        <div>
            {content}
            {ModelGroups}
            <ViewModelGroup />            
            {modelGroupRows}
        </div>
    )
}
export default ModelGroupsList