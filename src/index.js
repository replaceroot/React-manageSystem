import React from 'react';
import ReactDOM from 'react-dom';
// import Life from './pages/demo/Life';
import Admin from './admin';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Admin />, document.getElementById('root'));

serviceWorker.unregister();
