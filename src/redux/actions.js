import { CHANGE_SEARCHFIELD, GET_ROBOTS } from "./actionsType";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const setRobots = (robots) => ({
  type: GET_ROBOTS,
  payload: robots,
});
