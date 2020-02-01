import { createStore, applyMiddleware, compose } from 'redux';
import thunk from  'redux-thunk';
import rootReducer from './reducers';

const initalState = {};

const middleware =[thunk];

const store = createStore(rootReducer,initalState,compose(applyMiddleware(...middleware)
,
process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
));

export default store;
// const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), devTools)
// )
