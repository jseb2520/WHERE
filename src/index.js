import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './views/home/HomeContainer';
import * as serviceWorker from './serviceWorker';
import './assets/index.scss'

ReactDOM.hydrate(
  <HomeContainer 
    title = {'hola'}
  />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
