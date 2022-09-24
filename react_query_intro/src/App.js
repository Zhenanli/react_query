import TodoList from './features/todos/TodoList';

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
//import ModelGroupRepoPage from './content/ModelGroupRepoPage';
import ManageModelGroupPage from './content/ManageModelGroupPage';
import AddProcedurePage from './content/AddProcedurePage';
import ManageProcedurePage from './content/ManageProcedurePage';
import ViewProcedures from './content/ViewProcedures';
// import IndexPage from './examples';

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

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <LandingPageComponent /> },
    { path: 'OrchestrationStudio', element: <OrchestrationStudioComponent /> },
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
