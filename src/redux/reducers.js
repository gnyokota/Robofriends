import {
  CHANGE_SEARCHFIELD,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_PENDING,
  GET_ROBOTS_FAIL,
} from "./actionsType";

const initialState = {
  searchField: "",
  robotsData: [],
  isPending: false,
  error: null,
};

export const robotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD: {
      return { ...state, searchField: action.payload };
    }
    case GET_ROBOTS_PENDING: {
      return { ...state, isPending: true };
    }
    case GET_ROBOTS_SUCCESS: {
      return { ...state, robotsData: action.payload, isPending: false };
    }
    case GET_ROBOTS_FAIL: {
      return { ...state, error: action.payload, isPending: false };
    }
    default:
      return initialState;
  }
};
