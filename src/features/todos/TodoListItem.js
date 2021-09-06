import React from 'react';
import {ReactComponent as TimesSolid} from './times-solid.svg';


const TodoListItem = ({todo}) => {
    const {text, completed} = todo;
    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input className="toggle"
                           type="checkbox"
                           checked={completed}
                           // onChange={}
                    />
                    <div className="todo-text">{text}</div>
                </div>

                <div className="segment buttons">
                    <select className="colorPicker">
                        <option value="">{""}</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="orange">Orange</option>
                        <option value="purple">Purple</option>
                        <option value="red">Red</option>
                    </select>

                    <button className="destroy">
                        <TimesSolid/>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default TodoListItem;