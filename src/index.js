import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux' // ye react ke upar provider lag rha hai isliye isko ham react-redux se nikal rhe hai 
import RootReducer from './services/Reducers/RootReducer';

const store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), isse browser ke through ham debbuging kar sakte hai it's a required thing to us.
// console.log("store data", store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);

// ye jo store attribute hai vo redux se niklega or puri application me flow ho jayega

// Complete Redux flow 

// Make Redux wrpper in index file 
// what is provider
// Make store
// check Data flow in console 
// call action on button click 

