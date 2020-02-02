import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { GET_ERRORS,SET_CURRENT_USER, TEST_DISPATCH, ADD_USER } from './types';
import jwt_decode from 'jwt-decode';

//register User
export const registerUser = userData =>{
    return{
        type:TEST_DISPATCH,
        payload:userData
    };
};

export const loginUser =  (userData,history) => dispatch =>{
  console.log(userData);
axios
  .post('/api/users/login',userData)
  .then(res => {
      const {token} = res.data;

      localStorage.setItem('jwtToken',token);
      setAuthToken(token);

      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));

  })
  .catch(err => dispatch(
    {
      type: GET_ERRORS,
      payload: err.response.data
  }))

}

export const setCurrentUser =(decoded) =>{
  return{

      type: SET_CURRENT_USER,
      payload:decoded
  }
}

export const addUser = (data) => dispatch =>{
  axios.post('/api/users/register', data)
  .then(res=>
  { dispatch({
          type: ADD_USER,
          payload: res.data
      })
  })
  .catch(err=>{
      dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      })
  })
}

export const logoutUSer =  () => dispatch =>{
  //remove token fromlocal storage
  localStorage.removeItem('jwtToken');

  //remove auth header for future req
  setAuthToken(false);
  //set the current user to empty object which will set is authenticated to false

  dispatch(setCurrentUser({}));

}

