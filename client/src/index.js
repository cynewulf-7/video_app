import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { persistor, store } from './redux/store.js'
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

