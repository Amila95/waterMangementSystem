import axios from 'axios';
import { GET_ERRORS } from './types';

export const addReportDetails = (data, history) => dispatch =>{
  axios.post('/api/reportDetails', data)
  .then(res => history.push('/calculationSheet'))
  .catch(err=>{
      dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      })
  })
}
