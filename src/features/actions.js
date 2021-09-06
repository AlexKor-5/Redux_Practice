import {constants} from "./constants";

export const changeInput = (value = "") => ({
    type: constants.changeInput,
    payload: value
});

export const addToDo = (todoText = "") => ({
    type: constants.addToDo,
    payload: todoText
});

export const markCompleted = (id, value = false) => ({
    type: constants.markCompleted,
    payload: {id, value: !value}
});
