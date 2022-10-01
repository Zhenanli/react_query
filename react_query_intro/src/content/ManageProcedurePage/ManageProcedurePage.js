import React from 'react';
import {
  Button,
  Theme,
  Grid,
  Column,
  FormGroup,
  Stack,
  TextInput,
  RadioButtonGroup,
  RadioButton,
} from '@carbon/react';
import { iconDownload, iconEdit, iconOpen } from '@carbon/icons';
import './_manage-procedure.scss';
// import ProcedureList from '../../features/Objects/ProcedureList';

class ManageProcedurePage extends React.Component {
  handleSelectAll = selectAll => () => {
    selectAll();
  };
  render() {
    return (
      <>
        <Theme>
          <Grid className="manage-procedure-page" fullWidth>
            <Column
              lg={16}
              md={8}
              sm={4}
              className="manage-procedure-page__banner">
              <h1 className="manage-procedure-page__heading">
                Managing Procedure
              </h1>
            </Column>
            <Column lg={16} md={8} sm={4} className="manage-procedure-page__r1">
              <FormGroup style={{ maxWidth: '400px' }}>
                <Stack gap={7}>
                  <TextInput id="procedure-objectname" labelText="Object name" disabled={true} value = "Object1"/>
                  <TextInput id="procedure-procedurename" labelText="Procedure name" />
                  <TextInput id="procedure-procedurestep1" labelText="Step 1 Description" />
                  <RadioButtonGroup
                    legendText="Step 1 asset type"
                    name="radio-button-group"
                    defaultSelected="Image">
                    <RadioButton
                      labelText="Image"
                      value="image-1"
                      id="image-1"
                    />
                    <RadioButton
                      labelText="Video"
                      value="video-2"
                      id="video-2"
                    />
                    <RadioButton
                      labelText="AR"
                      value="ar-3"
                      id="ar-3"
                    />
                  </RadioButtonGroup>
                  <Button>Save</Button>
                </Stack>
              </FormGroup>
            </Column>
          </Grid>
          {/* <ProcedureList objectid= "Object1" /> */}
        </Theme>
      </>
    );
  }
}

export default ManageProcedurePage;
