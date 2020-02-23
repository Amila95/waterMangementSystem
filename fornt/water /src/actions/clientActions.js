import axios from 'axios';
import { GET_ERRORS,ADD_CLIENT } from './types';

export const addClient = (data, history) => dispatch =>{
  axios.post('/api/client', data)
  .then(res=>
  { dispatch({
          type: ADD_CLIENT,
          payload: res.data
      })
  })
  ///drinkingwaterclient/viewclient/:id
  //console.log("res "+ res.data.id)
  .then(res => history.push('/drinkingwaterclient'))
  // .then(res => console.log("res "+ res.id))
  .catch(err=>{
      dispatch({
          type: GET_ERRORS,
          payload: err.data
      })
  })
}

export const getClient =  id => dispatch =>{
  console.log("iddd"+id);
  axios.get(`/api/client/${id}`)
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

