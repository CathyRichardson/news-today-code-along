import { createStore } from 'redux';
import reducer from './reducer';

// another way to write it:
// const store = createStore(reducer);
// export default store;

export default createStore(reducer);