import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/view/App';
import registerServiceWorker from './registerServiceWorker';

//redux 和react-redux（关联react和redux）
import { createStore } from 'redux';
import { Provider } from 'react-redux';
////reducers 状态树state和逻辑操作
import rootRedux from './store/store.js'
//router
import { BrowserRouter } from 'react-router-dom'

//创建状态树和设置
//生成状态树对象
const store = createStore(rootRedux);
//start 状态树应用到全局 通过Provider

ReactDOM.render((
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
  ), document.getElementById('root'))
registerServiceWorker();
