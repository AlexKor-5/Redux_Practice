import {initialToDosState} from "../initialState";
import {constants} from "../constants";
import {v4 as uuidv4} from 'uuid';

export default function todosReducer(state = initialToDosState, action) {
    switch (action.type) {
        case constants.addToDo:
            return [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload,
                    completed: false
                }
            ];
        case constants.markCompleted:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        completed: action.payload.value
                    }
                } else {
                    return item;
                }
            });
        case constants.deleteToDo:
            return state.filter((item) => item.id !== action.payload.id);
        case constants.addColor:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        color: action.payload.newColorValue
                    }
                } else {
                    return item;
                }
            });
        case constants.markAllCompleted:
            return state.map(todo => ({...todo, completed: action.payload}));
        default:
            return state;
    }
}