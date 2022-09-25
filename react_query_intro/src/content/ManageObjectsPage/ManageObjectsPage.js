import React, { Component } from 'react';

import { Content, Theme } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';
import {
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
import './_manage-objects-page.scss';
import ObjectList from '../../features/Objects/ObjectList';

class ManageProcedurePage extends Component {
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
                Managing Objects
              </h1>
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

export default ManageProcedurePage;
