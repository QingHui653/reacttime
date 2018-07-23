import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import AntdDemo from './views/pager/AntdDemo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AntdDemo />, document.getElementById('root'));
registerServiceWorker();
