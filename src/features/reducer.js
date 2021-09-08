import {combineReducers} from 'redux';
import inputReducer from "./reducerSilces/inputSlice";
import todosReducer from "./reducerSilces/todosSlice";
import filtersReducer from "./reducerSilces/filtersSlice";

const rootReducer = combineReducers({
    input: inputReducer,
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer