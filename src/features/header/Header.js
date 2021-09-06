import React from 'react'
import store from "../store";
import {changeInput} from "../actions";

const Header = () => {
    const consolePrint = (e) => {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            console.log("add To do");
        }
    }

    return (
        <header className="header">
            <input className="new-todo"
                   placeholder={"Enter..."}
                   onChange={(e) => store.dispatch(changeInput(e.target.value))}
                   onKeyUp={consolePrint}
            />
        </header>
    )
}

export default Header
