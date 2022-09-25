import React, { Component } from 'react';

import './_orchestration-studio.scss';
import { Content, Theme } from '@carbon/react';
import OrchestratorStudioHeader from '../../components/OrchestratorStudioHeader';
import { Route, Routes } from 'react-router-dom';
import AddModelGroupPage from '../../content/AddModelGroupPage';
import ManageModelGroupPage from '../../content/ManageModelGroupPage';
import AddProcedurePage from '../../content/AddProcedurePage';
import ManageObjectsPage from '../ManageObjectsPage';
import NewModelGroup from '../../features/ModelGroups/NewModelGroup';

class OrchestrationStudio extends Component {
  render() {
    return (
      <>
        <Theme>
          <OrchestratorStudioHeader />
          <Content>
            <Routes>
              <Route path="/AddModelGroupPage" element=<AddModelGroupPage /> /> 
              <Route path="/ManageModelGroupPage" element=<ManageModelGroupPage /> />
              <Route path="/ManageObjectsPage" element=<ManageObjectsPage /> />
              <Route path="/ManageObjectsPage" element=<ManageObjectsPage /> />
              <Route path="/AddProcedurePage" element=<AddProcedurePage /> />
            </Routes>
          </Content>
        </Theme>
      </>
    );
  }
}

export default OrchestrationStudio;
