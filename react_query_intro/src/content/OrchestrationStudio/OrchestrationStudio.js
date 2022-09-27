import React, { Component } from 'react';

import './_orchestration-studio.scss';
import { Content, Theme } from '@carbon/react';
import OrchestratorStudioHeader from '../../components/OrchestratorStudioHeader';
import { Route, Routes } from 'react-router-dom';
import AddModelGroupPage from '../../content/AddModelGroupPage';
import ManageModelGroupsPage from '../../content/ManageModelGroupsPage';
import AddProcedurePage from '../../content/AddProcedurePage';
import ManageObjectsPage from '../ManageObjectsPage/ManageObjectsPage';
import ManageProceduresPage from '../ManageProceduresPage/ManageProceduresPage';
import NewModelGroup from '../../features/ModelGroups/NewModelGroup';
import ManageModelGroup from '../../features/ModelGroups/ManageModelGroup';

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
                path="/ManageModelGroupsPage"
                element=<ManageModelGroupsPage />
              />
              <Route
                path="/ManageModelGroup"
                element=<ManageModelGroup />
              />
              <Route path="/ManageObjectsPage" element=<ManageObjectsPage /> />
              <Route
                path="/ManageProceduresPage"
                element=<ManageProceduresPage />
              />
              <Route path="/AddProcedurePage" element=<AddProcedurePage /> />
            </Routes>
          </Content>
        </Theme>
      </>
    );
  }
}

export default OrchestrationStudio;
