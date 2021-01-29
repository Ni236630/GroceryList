import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { Home } from './components/Home';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

