import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// render our applicatin in the root div ...that is in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

