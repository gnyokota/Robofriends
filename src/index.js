import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import App from "./App";
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from "./store/reducers";
import {createLogger} from 'redux-logger'; 
import thunkMiddleware from 'redux-thunk';

const logger = createLogger(); 
const rootReducer = combineReducers({searchRobots, requestRobots});
//thunkMiddleware is used for async requests. It waits for a function. 
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 

ReactDOM.render(
  //provider will be able to pass the prop to all the components  
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
