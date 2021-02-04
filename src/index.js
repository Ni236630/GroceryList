import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { GroceryListApp } from './components/GroceryListApp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GroceryListApp />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

