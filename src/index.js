import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './action_creators';
import App from './components/App';
import './sass/style.sass';

const store = createStore(reducer);

store.dispatch(setState({quote: 'This is a random quote generator. Fear it!'}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
