import { ADD_CLIENT } from '../actions/types';
const initialState = {
    client:{},
}

export default function(state = initialState,action){
    switch(action.type){
        case ADD_CLIENT:
        return{
            ...state,
            client:action.payload
        }

        default:
        return state;
    }
}
