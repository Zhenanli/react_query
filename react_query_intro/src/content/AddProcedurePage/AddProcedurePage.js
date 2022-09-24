import React, { Component } from 'react';
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
import './_add-procedure-page.scss';

class AddProcedurePage extends Component {
  render() {
    return (
      <Grid className="add-procedure-page" fullWidth>
        <Column lg={16} md={8} sm={4} className="add-procedure-page__banner">
          <h1 className="add-procedure-page__heading">
            Procedure Creation Screen
          </h1>
        </Column>
        <Column lg={16} md={8} sm={4} className="add-procedure-page__r2">
          <Grid className="tabs-group-content">
            <Column md={4} lg={7} sm={4} className="add-procedure-page">
              <Form>
                <Stack gap={7}>
                  <TextInput
                    helperText="Enter Procedure Name (Mandatory)!"
                    id="procedure_name"
                    invalidText="Invalid Procedure Name."
                    labelText="Procedure Name:"
                    placeholder="Procedure1"
                  />
                  <TextInput
                    helperText="Enter Procedure Description!"
                    id="procedure_description"
                    labelText="Procedure Description:"
                    placeholder="Procedure1 will be added to assign models and flow details!"
                  />
                  <Button kind="primary" tabIndex={0} type="start">
                    Start New Procedure
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

export default AddProcedurePage;
