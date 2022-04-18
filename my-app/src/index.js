import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{Provider} from "react-redux"
import {store,persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'
// import { Router } from 'react-router';
import{BrowserRouter as Router} from 'react-router-dom'


// render our applicatin in the root div ...that is in index.html
ReactDOM.render(
  // wrapping our application with provider(redux)--so that store.js use garna paos sablay
  // store passing here.. 
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
 
    <App /> 
   
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

