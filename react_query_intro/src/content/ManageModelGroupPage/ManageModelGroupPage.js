import React, { Component } from 'react';

import { Content, Theme } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';

import ViewModelGroup from '../../content/ViewModelGroup';
import ModelGroupsList from '../../features/ModelGroups/ModelGroupsList';
import {
  Link,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Grid,
  Column,
} from '@carbon/react';
import { InfoSection, InfoCard } from '../../components/Info';
import { Globe, Application, PersonFavorite } from '@carbon/react/icons';
import { Form, Stack, TextInput } from '@carbon/react';
import './_manage-model-group-page.scss';

/*
class ManageModelGroupPage extends Component{
  render() {
    return (
      <Grid className="manage-model-group-page" fullWidth>
        <Column lg={16} md={8} sm={4} className="manage-model-group-page__banner">
          <h1 className="manage-model-group-page__heading">
            Manage Model Screen
          </h1>
        </Column>
        <Column lg={16} md={8} sm={4} className="manage-model-group-page__r2">
          <Grid className="manage-model-group-page-content">
            <Column
              md={4}
              lg={7}
              sm={4}
              className="manage-model-group-page">
              <Form>
                <Stack gap={7} element={Link} to="/OrchestrationStudio/ViewModelGroup">
                  View Model Groups                  
                </Stack>
              </Form>
            </Column>
          </Grid>
        </Column>
      </Grid>
    );
  }
}
*/

/*
class ManageModelPage extends Component{
  render() {
    return (
      <>
        <Theme>
          <Grid className="manage-model-group-page" fullWidth>
            <Column lg={16} md={8} sm={4} className="add-model-group-page__banner">
              <h1 className="add-model-group-page__heading">
                Manage Model Group Screen
              </h1>
            </Column>
          </Grid>
          <ViewModelGroup />
        </Theme>
        <Content>         
          <Switch>
            <Route path="/OrchestrationStudio/ViewModelGroup" component={ViewModelGroup} />            
          </Switch>
          <Button>
            Edit Selected
          </Button>
          <Button>
            Open Selected
          </Button>
          <Button>
            Delete Selected
          </Button>
        </Content>
      </>
    );
  }
}
*/

class ManageModelGroupPage extends Component {
  render() {
    return (
      <>
        <Theme>
          <Grid className="manage-model-group-page" fullWidth>
            <Column
              lg={16}
              md={8}
              sm={4}
              className="manage-model-group-page__banner">
              <h1 className="manage-model-group-page__heading">
                Manage Model Group Screen
              </h1>
            </Column>
          </Grid>
          <ModelGroupsList />
        </Theme>
        <Content>
          <Button kind="primary" tabIndex={0} type="submit">
            Delete Selected
          </Button>
          <Button kind="primary" tabIndex={1} type="submit">
            Edit Selected
          </Button>
          <Button kind="primary" tabIndex={2} type="submit">
            Open Selected
          </Button>
        </Content>
      </>
    );
  }
}

export default ManageModelGroupPage;
