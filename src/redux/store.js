import { createStore, compose } from "redux";
import { searchRobots } from "./reducers";

const initialState = { searchField: "", robots: [] };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  searchRobots,
  initialState,
  composeEnhancers()
);
