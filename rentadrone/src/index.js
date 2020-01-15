import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import Modal from 'react-modal';
import './assets/app.css';
import App from './App';

/* React Modal */
Modal.setAppElement('#root');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);
