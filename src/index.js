import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import State from './Reducers/MainState';
import {addParticle} from './actions'


const store = createStore(State);

store.dispatch(addParticle(1,150,100,"white"))
store.dispatch(addParticle(5,300,300,"red"))
store.dispatch(addParticle(2,500,500,"yellow"))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
