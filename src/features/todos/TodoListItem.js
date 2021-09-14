import React, {useState} from 'react';
import {ReactComponent as TimesSolid} from './times-solid.svg';
import {markCompleted, deleteToDo, addColor} from "../actions";
import {useDispatch, useSelector} from "react-redux";
import setOfColors from "../data-colors";


const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();
    const {text, id} = todo;
    const completed = useSelector(state => state.todos.find(item => item.id === id).completed);
    const colorNames = setOfColors;
    const [innerSelectColor, setInnerSelectColor] = useState("");
    const colors = useSelector(state => state.filters.filterColors);

    console.log(innerSelectColor);

    const colorSetter = (e) => {
        dispatch(addColor(id, e.target.value));
        setInnerSelectColor(e.target.value);
    }

    const displayColorOptions = (colors = []) => {
        return colorNames.map((color, index) => {
            return <option key={index}
                           value={color}>{color.toUpperCase()}</option>
        })
    }

    return (
        <li>
            <div className="view">
                <div className="segment label">
                    <input className="toggle"
                           type="checkbox"
                           checked={completed} readOnly={true}
                           onClick={() => dispatch(markCompleted(id, completed))}
                    />
                    <div className="todo-text">{text}</div>
                </div>

                <div className="segment buttons">
                    <select className="colorPicker"
                            value={todo.color}
                            onChange={colorSetter}
                            style={{color: todo.color}}
                    >
                        {displayColorOptions(colors)}
                    </select>

                    <button className="destroy" onClick={() => dispatch(deleteToDo(id))}>
                        <TimesSolid/>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default React.memo(TodoListItem);