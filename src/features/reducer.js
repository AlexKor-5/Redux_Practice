import {combineReducers} from 'redux';
import inputReducer from "./reducerSilces/inputSlice";
import todosReducer from "./reducerSilces/todosSlice";

const rootReducer = combineReducers({
    input: inputReducer,
    todos: todosReducer
})

export default rootReducer