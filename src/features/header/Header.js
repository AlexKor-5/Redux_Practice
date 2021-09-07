import React from 'react'
import {changeInput} from "../actions";
import {useSelector, useDispatch} from "react-redux";

const Header = () => {
    const inputValue = useSelector(state => state.input);
    const dispatch = useDispatch();

    const consolePrint = (e) => {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            console.log("add To do");
        }
    }

    return (
        <header className="header">
            <input className="new-todo"
                   placeholder={inputValue}
                   onChange={(e) => dispatch(changeInput(e.target.value))}
                   onKeyUp={consolePrint}
            />
        </header>
    )
}

export default Header
