import React, { Component } from 'react';

import './_orchestration-studio.scss';
import { Content, Theme } from '@carbon/react';
import OrchestratorStudioHeader from '../../components/OrchestratorStudioHeader';
import { Route, Routes } from 'react-router-dom';
import AddModelGroupPage from '../../content/AddModelGroupPage';
import ManageModelGroupPage from '../../content/ManageModelGroupPage';
import AddProcedurePage from '../../content/AddProcedurePage';
import ManageProcedurePage from '../../content/ManageProcedurePage';

class OrchestrationStudio extends Component {
  render() {
    return (
      <>
        <Theme>
          <OrchestratorStudioHeader />
          <Content>
            <Routes>
              <Route
                path="/OrchestrationStudio/AddModelGroupPage"
                component={AddModelGroupPage}
              />
              <Route
                path="/OrchestrationStudio/ManageModelGroupPage"
                component={ManageModelGroupPage}
              />
              <Route
                path="/OrchestrationStudio/AddProcedurePage"
                component={AddProcedurePage}
              />
              <Route
                path="/OrchestrationStudio/ManageProcedurePage"
                component={ManageProcedurePage}
              />
            </Routes>
          </Content>
        </Theme>
      </>
    );
  }
}

export default OrchestrationStudio;
