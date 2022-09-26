import React from 'react';
import { Button, Theme, Grid, Column } from '@carbon/react';
import { iconDownload, iconEdit, iconOpen } from '@carbon/icons';
import './_manage-procedures.scss';
import ProcedureList from '../../features/Objects/ProcedureList';

class ManageProceduresPage extends React.Component {
  handleSelectAll = selectAll => () => {
    selectAll();
  };
  render() {
    return (
      <>
        <Theme>
          <Grid className="manage-procedures-page" fullWidth>
            <Column
              lg={16}
              md={8}
              sm={4}
              className="manage-procedures-page__banner">
              <h1 className="manage-procedures-page__heading">
                Managing Procedures
              </h1>
            </Column>
          </Grid>
          {/* <ProcedureList /> */}
        </Theme>
        {/* <Content>
          <Button kind="primary" tabIndex={0} type="submit">
            Delete Selected
          </Button>
          <Button kind="primary" tabIndex={1} type="submit">
            Edit Selected
          </Button>
          <Button kind="primary" tabIndex={2} type="submit">
            Open Selected
          </Button>
        </Content> */}
      </>
    );
  }
}

export default ManageProceduresPage;
