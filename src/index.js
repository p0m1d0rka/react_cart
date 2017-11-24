import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';

const store = createStore(combineReducers(reducers),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();
