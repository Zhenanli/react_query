import React from 'react';
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
import Login from '../../components/Login/Login';

// import AuthContext from './context/AuthProvider';
import { Form, Stack, TextInput } from '@carbon/react';
const LandingPage = () => {
  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <h1 className="landing-page__heading">
          Welcome to IBM AR-VR Orchestrator!
        </h1>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r2">
        <Tabs defaultSelectedIndex={0}>
          <TabList className="tabs-group" aria-label="Tab navigation">
            <Tab>Account</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className="landing-page__tab-content">
                  <p className="landing-page__p">User Login Screen</p>
                  <Login />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  IBM Orchestrator tool automates the configuration,
                  coordination, integration, and data management processes on
                  several applications and systems. It can be leveraged to
                  automate repetitive tasks and various workflows in several
                  industries like manufacturing.
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className="tabs-group-content">
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className="landing-page__tab-content">
                  IBM Orchestrator tool uses cutting edge technologies like
                  React, Node and Couch Database and follows Agile process of
                  continous Integration and Continous deployment!
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="The Principles">
          <InfoCard
            heading="IBM Orchestrator is Transparent"
            body="It's a distributed effort, guided by the principles of the open-source movement. Orchestrator's users are also it's makers, and everyone is encouraged to contribute."
            icon={() => <PersonFavorite size={32} />}
          />
          <InfoCard
            heading="IBM Orchestrator is Modular"
            body="Orchestrator's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
            icon={() => <Application size={32} />}
          />
          <InfoCard
            heading="IBM Orchestrator is Reusable"
            body="Based on the comprehensive IBM Design Language, every element and component of Orchestrator was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
};

export default LandingPage;
