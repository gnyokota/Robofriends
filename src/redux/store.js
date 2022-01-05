import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { robotsReducer } from "./reducers";

const initialState = {
  serachField: "",
  robotsData: [],
  isPending: false,
  error: null,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  robotsReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

//113: 24min
