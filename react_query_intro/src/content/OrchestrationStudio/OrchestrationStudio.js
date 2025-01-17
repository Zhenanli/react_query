import React, { Component } from 'react';

import './_orchestration-studio.scss';
import { Content, Theme } from '@carbon/react';
import OrchestratorStudioHeader from '../../components/OrchestratorStudioHeader';
import { Route, Routes } from 'react-router-dom';
import AddModelGroupPage from '../../content/AddModelGroupPage';
import ManageModelGroupsPage from '../../content/ManageModelGroupsPage';
import AddProcedurePage from '../../content/AddProcedurePage';

import NewModelGroup from '../../features/ModelGroups/NewModelGroup';
import ManageModelGroup from '../../features/ModelGroups/ManageModelGroup';

import ManageObjectsPage from '../ManageObjectsPage/ManageObjectsPage';
import ManageProceduresPage from '../ManageProceduresPage/ManageProceduresPage';
import ManageProcedurePage from '../ManageProcedurePage';

class OrchestrationStudio extends Component {
  render() {
    return (
      <>
        <Theme>
          <OrchestratorStudioHeader />
          <Content>
             {/* Model related pages */}
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
               {/* Object related pages */}
              <Route path="/ManageObjectsPage" element=<ManageObjectsPage /> />
              <Route
                path="/ManageProceduresPage"
                element=<ManageProceduresPage />
              />
              <Route path="/ManageProcedurePage" element=<ManageProcedurePage /> />
            </Routes>
          </Content>
        </Theme>
      </>
    );
  }
}

export default OrchestrationStudio;
