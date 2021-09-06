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
            })
        default:
            return state;
    }
}