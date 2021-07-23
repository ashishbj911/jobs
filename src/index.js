import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {JobProvider} from './context'


ReactDOM.render(
 <JobProvider>
    <App />
  </JobProvider>,
  document.getElementById('root')
);


