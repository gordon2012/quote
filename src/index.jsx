import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {fetchQuote} from './action_creators';
import App from './components/App';
import './sass/style.sass';

const store = createStore (
  reducer,
  applyMiddleware(
    thunk
  )
);

store.dispatch(fetchQuote());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
