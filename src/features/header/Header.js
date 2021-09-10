import React from 'react'
import {changeInput, addToDo, clearInput} from "../actions";
import {useSelector, useDispatch} from "react-redux";

const Header = () => {
    const inputValue = useSelector(state => state.input);
    const dispatch = useDispatch();

    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            dispatch(addToDo(inputValue));
            // dispatch(clearInput());
        }
    }

    return (
        <header className="header">
            <input className="new-todo"
                   placeholder={inputValue}
                   onChange={(e) => dispatch(changeInput(e.target.value))}
                   onKeyUp={pressEnter}
            />
        </header>
    )
}

export default Header
