import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {MyReduxApp} from "./MyReduxApp/MyReduxApp";

let destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <MyReduxApp/>
    </div>,
    destination
);