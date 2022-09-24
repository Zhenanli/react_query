import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import ModelGroupRepoPage from '../../content/ModelGroupRepoPage';
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Grid,
  Column,
  Button,
  FlexGrid,
  Row,
  DemoContent,
} from '@carbon/react';

import { InfoSection, InfoCard } from '../../components/Info';
import { Globe, Application, PersonFavorite } from '@carbon/react/icons';
import { Form, Stack, TextInput } from '@carbon/react';
import './_add-model-group-page.scss';

class AddModelGroupPage extends Component {
  render() {
    return (
      <Grid className="add-model-group-page" fullWidth>
        <Column lg={16} md={8} sm={4} className="add-model-group-page__banner">
          <h1 className="add-model-group-page__heading">
            Model Creation Screen
          </h1>
        </Column>
        <Column lg={16} md={8} sm={4} className="add-model-group-page__r2">
          <Grid className="add-model-group-page-content">
            <Column md={4} lg={7} sm={4} className="add-model-group-page">
              <Form>
                <Stack gap={7}>
                  <TextInput
                    helperText="Enter Model Group Name (Mandatory)!"
                    id="model_name"
                    invalidText="Invalid error message."
                    labelText="Model Group Name:"
                    placeholder="ModelGroup1"
                  />
                  <TextInput
                    helperText="Enter Model Group Description!"
                    id="model_description"
                    invalidText="Invalid error message."
                    labelText="Model Group Description:"
                    placeholder="ModelGroup1 will be added to add model and flow details!"
                  />
                  <Button kind="primary" tabIndex={0} type="create_model_group">
                    Create Model Group
                  </Button>
                </Stack>
              </Form>
            </Column>
          </Grid>
        </Column>
      </Grid>
    );
  }
}

export default AddModelGroupPage;
