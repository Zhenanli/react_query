import React, { Component } from 'react';

import { Content, Theme, Grid, Column } from '@carbon/react';

import './_manage-objects-page.scss';
import ObjectList from '../../features/Objects/ObjectList';

class ManageObjectsPage extends Component {
  render() {
    return (
      <>
        <Theme>
          <Grid className="manage-objects-page" fullWidth>
            <Column
              lg={16}
              md={8}
              sm={4}
              className="manage-objects-page__banner">
              <h1 className="manage-objects-page__heading">Managing Objects</h1>
            </Column>
          </Grid>
          <ObjectList />
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

export default ManageObjectsPage;
