import React, {useMemo} from 'react'
import {changeInput, addToDo, clearInput} from "../actions";
import {useSelector, useDispatch} from "react-redux";

const Header = () => {
    const inputValue = useSelector(state => state.input);
    const dispatch = useDispatch();
    console.log("render Header Input");

    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            dispatch(addToDo(inputValue));
            dispatch(clearInput());
        }
    }

    const truly = useMemo(() => ({value: false}), []);

    const inputValueAction = (inputValue) => {
        let temper = inputValue;
        if (!truly.value) {
            temper = "";
        }
        truly.value = true;
        return temper;
    }

    return (
        <header className="header">
            <input className="new-todo"
                   placeholder={inputValue}
                   onChange={(e) => dispatch(changeInput(e.target.value))}
                   onKeyUp={pressEnter}
                   value={inputValueAction(inputValue)}
            />
        </header>
    )
}

export default Header
