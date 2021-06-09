import React, {Suspense} from 'react';
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
    <Suspense fallback={<h1>Loading...</h1>}>
      <Provider store={store}>
        <BrowserRouter history={history}>
          <GlobalStyle />
          <ToastContainer />
          <Routes />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
