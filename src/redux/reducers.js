import { CHANGE_SEARCHFIELD, GET_ROBOTS } from "./actionsType";

const initialState = { searchField: "", robots: [] };

export const searchRobots = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD: {
      return { ...state, searchField: action.payload };
    }
    case GET_ROBOTS: {
      return { ...state, robots: action.payload };
    }
    default:
      return initialState;
  }
};
