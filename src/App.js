import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter history={history}>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
