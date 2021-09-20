import {configureStore} from "@reduxjs/toolkit";
import inputReducer from "./reducerSilces/inputSlice";
import todosReducer from "./reducerSilces/todosSlice";
import filtersReducer from "./reducerSilces/filtersSlice";

const store = configureStore({
    reducer: {
        input: inputReducer,
        todos: todosReducer,
        filters: filtersReducer
    }
});
export default store;