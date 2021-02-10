import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants';

export const setSearchField = (text) =>{
    return {//the best practice is to add the type as a const (capital letters are used for constants)
    type: CHANGE_SEARCH_FIELD, 
    // payload is the data that will be sent to reducer 
    payload: text
    }
};

export const requestRobots = (dispatch) =>{
    dispatch({type: REQUEST_ROBOTS_PENDING})
    try{async function fetchData(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); 
        dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data});
      }
      fetchData();
    }catch(err){dispatch({type: REQUEST_ROBOTS_FAILED, payload:err})}
}