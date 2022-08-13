import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import thunk from 'redux-thunk';
import {Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux'
import myReducer from './Reducers/myReducer.js'
const store = createStore(myReducer,applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
