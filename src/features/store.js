import {createStore} from 'redux';
import rootReducer from "./reducer";
import {logStore} from "./enhancers/logStore";
import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(logStore);

const store = createStore(rootReducer, undefined, composedEnhancer);
export default store;