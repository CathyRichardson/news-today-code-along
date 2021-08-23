import { apply } from 'async';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import reducerTwo from './reducerTwo';

// another way to write it:
// const store = createStore(reducer);
// export default store;

const rootReducer = combineReducers({
    reducer,
    reducerTwo
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));