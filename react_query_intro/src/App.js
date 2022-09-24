import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import MainHeader from './components/MainHeader';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from 'react-router-dom';
import LandingPage from './content/LandingPage';
// import RepoPage from './content/RepoPage';
import OrchestrationStudio from './content/OrchestrationStudio';
import AddModelGroupPage from './content/AddModelGroupPage';
import ViewModelGroup from './content/ViewModelGroup';
import ManageModelGroupPage from './content/ManageModelGroupPage';
import AddProcedurePage from './content/AddProcedurePage';
import ManageProcedurePage from './content/ManageProcedurePage';
import ViewProcedures from './content/ViewProcedures';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Theme theme="g100">
//           <MainHeader />
//         </Theme>
//         <Content>
//           <Routes>
//             <Route exact path="/" component={LandingPage} />
//             {/* <Route path="/repos" component={RepoPage} /> */}
//             <Route
//               path="/OrchestrationStudio"
//               component={OrchestrationStudio}
//             />
//             <Route
//               path="/OrchestrationStudio/AddModelGroupPage"
//               component={AddModelGroupPage}
//             />
//             <Route
//               path="/OrchestrationStudio/ViewModelGroup"
//               component={ViewModelGroup}
//             />
//             <Route
//               path="/OrchestrationStudio/ManageModelGroupPage"
//               component={ManageModelGroupPage}
//             />
//             <Route
//               path="/OrchestrationStudio/AddProcedurePage"
//               component={AddProcedurePage}
//             />
//             <Route
//               path="/OrchestrationStudio/ManageProcedurePage"
//               component={ManageProcedurePage}
//             />
//             <Route
//               path="/OrchestrationStudio/ViewProcedures"
//               component={ViewProcedures}
//             />

//             {/* <Route path="/examples" component={IndexPage} /> */}
//           </Routes>
//         </Content>
//       </>
//     );
//   }
// }

// export default App;

const LandingPageComponent = () => {
  return <LandingPage />;
};

const OrchestrationStudioComponent = () => {
  return <OrchestrationStudio />;
};

const AddModelGroupPageComponent = () => {
  return <AddModelGroupPage />;
};
const ViewModelGroupComponent = () => {
  return <ViewModelGroup />;
};
const ManageModelGroupPageComponent = () => {
  return <ManageModelGroupPage />;
};
const AddProcedurePageComponent = () => {
  return <AddProcedurePage />;
};
const ManageProcedurePageComponent = () => {
  return <ManageProcedurePage />;
};
const ViewProceduresComponent = () => {
  return <ViewProcedures />;
};

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <LandingPageComponent /> },
    {
      path: 'OrchestrationStudio/*',
      element: <OrchestrationStudioComponent />,
    },
    {
      path: '/OrchestrationStudio/AddModelGroupPage',
      element: <AddModelGroupPageComponent />,
    },
    {
      path: '/OrchestrationStudio/ViewModelGroup',
      element: <ViewModelGroupComponent />,
    },
    {
      path: '/OrchestrationStudio/ManageModelGroupPage',
      element: <ManageModelGroupPageComponent />,
    },
    {
      path: '/OrchestrationStudio/AddProcedurePage',
      element: <AddProcedurePageComponent />,
    },
    {
      path: '/OrchestrationStudio/ManageProcedurePage',
      element: <ManageProcedurePageComponent />,
    },
    {
      path: '/OrchestrationStudio/ViewProcedures',
      element: <ViewProceduresComponent />,
    },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <>
      <Theme theme="g100">
        <MainHeader />
      </Theme>
      <Router>
        <App />
      </Router>
    </>
  );
};

export default AppWrapper;
