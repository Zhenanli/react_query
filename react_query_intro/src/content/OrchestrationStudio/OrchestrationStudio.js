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
              <Route path="/AddModelGroupPage" element=<AddModelGroupPage /> />
              <Route
                path="/ManageModelGroupPage"
                element=<ManageModelGroupPage />
              />
              <Route path="/AddProcedurePage" element=<AddProcedurePage /> />
              <Route
                path="/ManageProcedurePage"
                element=<ManageProcedurePage />
              />
            </Routes>
          </Content>
        </Theme>
      </>
    );
  }
}

export default OrchestrationStudio;
