import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { reducer } from './reducer';

const store = createStore(reducer);

store.subscribe(() => {
    console.log('subscrire');
})

render(
  (
  <Provider store={store}>
    <HashRouter>
        <App/>
    </HashRouter>
  </Provider>
  )
  , document.getElementById('app'));
