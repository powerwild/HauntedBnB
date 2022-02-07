import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store';
import { Provider } from 'react-redux';
import FormProvider from './context/Modal';
import { BrowserRouter } from 'react-router-dom';
import { restoreCSRF, csrfFetch } from './store/csrf';
import './index.css';

import * as sessionActions from './store/session';

const store = configureStore();
if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();
  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

const Root = () => {
  return (
    <Provider store={store}>
      <FormProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FormProvider>
    </Provider>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
