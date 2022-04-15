import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{Provider} from "react-redux"
import store from "./redux/store"


// render our applicatin in the root div ...that is in index.html
ReactDOM.render(
  // wrapping our application with provider(redux)--so that store.js use garna paos sablay
  // store passing here.. 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

