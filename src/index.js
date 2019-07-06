import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Life from './pages/demo/Life';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Life />, document.getElementById('root'));

serviceWorker.unregister();
