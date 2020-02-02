import { ADD_REPORT_DETAILS } from '../actions/types';
const initialState = {
    reportDetails:{},
}

export default function(state = initialState,action){
    switch(action.type){
        case ADD_REPORT_DETAILS:
        return{
            ...state,
            reportDetails:action.payload
        }

        default:
        return state;
    }
}
