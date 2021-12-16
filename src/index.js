import './css/defaultStyle.css';
import './css/style.css';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import App from './app/App';

const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
