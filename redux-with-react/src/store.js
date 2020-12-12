import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const store = createStore(
    combineReducers({math: mathReducer, user: userReducer}),
    {},
    applyMiddleware(logger, thunk, promise)
);

// store.subscribe(() => {
//     console.log("Store updated!", store.getState());
// });

export default store;



//A Middleware
// const myLogger = (store) => (next) => (action) => {
//     console.log("Logged Action: ", action);
//     next(action);
// };