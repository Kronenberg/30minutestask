import axios from "axios";
import * as userActions from '../constants';


export const getCurrentUser = () =>
  (dispatch, getState) => {
    
    dispatch({ type: userActions.GET_CURRENT_USER_PENDING });

    axios.get("http://localhost:3000/user/current")
    .then((response) => {
        dispatch({ type: userActions.GET_CURRENT_USER_SUCCESS, payload: response });
      })
      .catch (error) => {
        dispatch({ type: userActions.GET_CURRENT_USER_REJECTED, payload: response });
      });

  }


export const createHewUser = (name, password) =>
  (dispatch, getState) => {
    
    dispatch({ type:userActions.GET_CURRENT_USER_PENDING });
    
    axios.post("http://localhost:3000/user/login?pass=" + name + "&user=" + password)
      .then((response) => {
        dispatch({ type: userActions.CREATE_USER_SUCCESS });
      })
      .catch((error) => {
        dispatch({ type: userActions.CREATE_USER_REJECTED });
      });


}



export default {
    createHewUser,
    getCurrentUser
}