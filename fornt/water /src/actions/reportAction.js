import axios from 'axios';
import { GET_ERRORS, ADD_REPORT_DETAILS } from './types';

export const addReportDetails = (id, data, history) => dispatch =>{
  axios.post('/api/reportDetailsDrinkWater', data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
            payload: res.data
        })
    })
  .then(res => history.push(`/drinkingwaterclient/viewclient/${id}/reportDetails/calculationSheet`))
  .catch(err=>{
      dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      })
  })
}

export const wasteAddReportDetails = (id, data, history) => dispatch =>{
  axios.post('/api/reportDetails', data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
            payload: res.data
        })
    })
  .then(res => history.push(`/wastewaterclient/viewclient/${id}/reportDetails/calculationSheet`))
  .catch(err=>{
      dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      })
  })
}

export const updateOil = (data, id) => dispatch =>{
  axios.patch(`/api/updateOilAndGrease/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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

export const updateTss = (data, id) => dispatch =>{
  axios.patch(`/api/updateTss/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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

export const updateCOD = (data, id) => dispatch =>{
  axios.patch(`/api/updateCOD/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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

export const updateAlkalinity = (data, id) => dispatch =>{
  axios.patch(`/api/updateAlkalinity/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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

export const updateHardness = (data, id) => dispatch =>{
  axios.patch(`/api/updateHardness/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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

export const updateCAHardness = (data, id) => dispatch =>{
  axios.patch(`/api/updateCAHardness/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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

export const updateMgHardness = (data, id) => dispatch =>{
  axios.patch(`/api/updateMGHardness/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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

export const updateChloride = (data, id) => dispatch =>{
  axios.patch(`/api/updateChloride/${id}`, data)
  .then(res=>
    { dispatch({
            type: ADD_REPORT_DETAILS,
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




