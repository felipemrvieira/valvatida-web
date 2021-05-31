import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './config/ReactotronConfig';
import {ToastContainer} from 'react-toastify';
import Routes from './routes';
import history from './services/history';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
