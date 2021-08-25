import React from "react";
import {configureStore} from '@reduxjs/toolkit';

//constants
const constants = () => ({
    increment: "counter/counterIncrement",
    decrement: "counter/counterDecrement"
});

//actions
const increment = (value = 0) => ({
    type: constants().increment,
    value: 1
});
const decrement = (value = 0) => ({
    type: constants().decrement,
    value: -1
});

//state
const initialState = () => ({value: 0});

//reducer
const counterReducer = (state = initialState(), action) => {
    switch (action.type) {
        case constants().increment:
            return {value: state.value + action.value}
        case constants().decrement:
            return {value: state.value + action.value}
        default:
            return state
    }
};

//selector
const selectCounterValue = state => state.value;

const store = configureStore({reducer: counterReducer});
console.log(store.getState());

export const MyReduxApp = () => {
    return (
        <>
            <Counter/>
        </>
    )
};

const Counter = ({value = 0}) => {
    return (
        <div>
            <input type="button"
                   value={"+"}
                   onClick={() => store.dispatch(increment())}
            />
            <span style={{padding: "10px"}}>{selectCounterValue(store.getState())}</span>
            <input type="button"
                   value={"-"}
                   onClick={() => store.dispatch(decrement())}
            />
        </div>
    )
};