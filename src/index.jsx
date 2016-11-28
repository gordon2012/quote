import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState, prefetchQuotes} from './action_creators';
import App from './components/App';
import './sass/style.sass';

let middleware = [thunk];
if(process.env.NODE_ENV === 'development') middleware.push(logger());

const store = createStore (
  reducer,
  applyMiddleware(...middleware)
);

store.dispatch(setState({quotes: {}, list: [], count: 0}));
store.dispatch(prefetchQuotes());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
