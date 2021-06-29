import React from 'react';
import { HashRouter } from 'react-router-dom';

import GloboStyles from './styles/globalStyles';
import AppProvider from './Hooks/index';
import Routes from './routes';


const App: React.FC = () => (
  <HashRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GloboStyles />
  </HashRouter>
);

export default App;
