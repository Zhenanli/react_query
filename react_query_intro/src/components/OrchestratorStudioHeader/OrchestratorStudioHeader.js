import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  Theme,
  HeaderSideNavItems,
} from '@carbon/react';

import './_orchestrator-studioHeader.scss';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
// import { Link } from 'react-router-dom';

/*
const OrchestratorStudioHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="AR Maintainace System">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="IBM">
          AR Maintainace System
        </HeaderName>
        <HeaderNavigation aria-label="AR Maintainace System">
          <HeaderMenuItem element={Link} to="/ProcedurePage">
            ProcedurePage
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/ModelPage">
            ModelPage
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/ProcedurePage">
              ProcedurePage
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);
*/

class OrchestratorStudioHeader extends Component {
  render() {
    return (
      <>
        <SideNav
          isFixedNav
          expanded={true}
          isChildOfHeader={true}
          aria-label="Side navigation">
          <SideNavItems>
            <SideNavMenu title="Models Library">
              <SideNavMenuItem href="/OrchestrationStudio/AddModelGroupPage">
                Create Model Group
              </SideNavMenuItem>
              <SideNavMenuItem href="/OrchestrationStudio/ManageModelGroupsPage">
                Manage Model Groups
              </SideNavMenuItem>
              <SideNavMenuItem href="/OrchestrationStudio/ManageModelGroup">
                Manage Model Group
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="Procedure Library">
              <SideNavMenuItem href="/OrchestrationStudio/ManageObjectsPage">
                Manage Objects
              </SideNavMenuItem>
              <SideNavMenuItem href="/OrchestrationStudio/ManageProceduresPage">
                Manage Procedures
              </SideNavMenuItem>
              <SideNavMenuItem href="/OrchestrationStudio/ManageProcedurePage">
                Manage Procedure
              </SideNavMenuItem>
            </SideNavMenu>
          </SideNavItems>
        </SideNav>
      </>
    );
  }
}

/*
const OrchestratorStudioHeader = () => (
  <>
    <SideNav
      isFixedNav
      expanded={true}
      isChildOfHeader={true}
      aria-label="Side navigation">
      <SideNavItems>
        <HeaderSideNavItems>
          <HeaderMenuItem element={Link} to="/OrchestrationStudio/ProcedurePage">
            ProcedurePage
          </HeaderMenuItem>
          <HeaderMenuItem element={Link} to="/OrchestrationStudio/ModelPage">
            ModelPage
          </HeaderMenuItem>
        </HeaderSideNavItems>
        <SideNavMenu title="Models Library" element={Link} to="/OrchestrationStudio/ProcedurePage">
          <SideNavMenuItem  element={Link} to="/OrchestrationStudio/ModelPage">
            Create New Model Group
          </SideNavMenuItem>
          <SideNavMenuItem  element={Link} to="/OrchestrationStudio/ModelPage">
            Edit Model Group
          </SideNavMenuItem>
          <SideNavMenuItem  element={Link} to="/OrchestrationStudio/ModelPage">
            Delete Model Group
          </SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu title="Procedure Library" element={Link} to="/OrchestrationStudio/ProcedurePage">
          <SideNavMenuItem>
            Create Procedure
          </SideNavMenuItem>
          <SideNavMenuItem>
            Edit Procedure
          </SideNavMenuItem>
          <SideNavMenuItem>
            Delete Procedure
          </SideNavMenuItem>
        </SideNavMenu>
        </SideNavItems>
        </SideNav>
  </>
);
*/

export default OrchestratorStudioHeader;
