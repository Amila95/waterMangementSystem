import axios from 'axios';
import { GET_ERRORS,ADD_CLIENT } from './types';

export const addClient = (data) => dispatch =>{
  axios.post('/api/client', data)
  .then(res=>
  { dispatch({
          type: ADD_CLIENT,
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
