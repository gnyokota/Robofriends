import {
  CHANGE_SEARCHFIELD,
  GET_ROBOTS_SUCCESS,
  GET_ROBOTS_PENDING,
  GET_ROBOTS_FAIL,
} from "./actionsType";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const getRobotsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ROBOTS_PENDING });
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const robots = await response.json();
    dispatch({ type: GET_ROBOTS_SUCCESS, payload: robots });
  } catch (error) {
    dispatch({ type: GET_ROBOTS_FAIL, payload: error });
  }
};
