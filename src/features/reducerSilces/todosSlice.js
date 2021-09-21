import {initialToDosState} from "../initialState";
// import {constants} from "../constants";
import {v4 as uuidv4} from 'uuid';
import {createSlice} from "@reduxjs/toolkit";
const todosReducer = createSlice({
    name: 'todos',
    initialState: initialToDosState,
    reducers: {
        addToDo(state, action) {
            state = [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload,
                    completed: false
                }
            ]
        },
        markCompleted: {
            reducer(state, action) {
                state = state.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            completed: action.payload.value
                        }
                    } else {
                        return item
                    }
                })
            },
            prepare(id, completed) {
                return {
                    payload: {id, completed}
                }
            }
        },
        deleteToDo(state, action) {
            const elemId = action.payload
            state = state.filter((item) => item.id !== elemId)
        },
        addColor(state, action) {
            state = state.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        color: action.payload.newColorValue
                    }
                } else {
                    return item
                }
            })
        },
        markAllCompleted(state, action) {
            state = state.map(todo => ({...todo, completed: action.payload}))
        },
        clearCompleted(state, action) {
            state = state.filter(todo => {
                return !action.payload.id.some(id => id === todo.id)
            })
        }
    }
})

export const {addToDo, markCompleted, deleteToDo, addColor, markAllCompleted, clearCompleted} = todosReducer.actions
export default todosReducer.reducer