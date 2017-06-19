import React from 'react';
import ReactDOM from 'react-dom';
import LeafletMap from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LeafletMap  />, document.getElementById('map-container'));
registerServiceWorker();
