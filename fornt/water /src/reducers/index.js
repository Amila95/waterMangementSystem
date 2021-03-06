import {combineReducers} from "redux";

import authReducer from  './authReducer';
import errorReducer from  './errorReducer';
import clientReducer from  './clientReducer';
import reportReducer from  './reportReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    client: clientReducer,
    report: reportReducer
});
