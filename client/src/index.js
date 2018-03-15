import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import Nav from './components/Nav'
import { unregister as unregisterServiceWorker } from './registerServiceWorker'


ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Nav />, document.getElementById('root'));

unregisterServiceWorker();
