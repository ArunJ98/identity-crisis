import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameController from './GameController'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameController />, document.getElementById('root'));
registerServiceWorker();
