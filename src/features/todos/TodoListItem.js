import React, {useState} from 'react';
import {ReactComponent as TimesSolid} from './times-solid.svg';
import {markCompleted, deleteToDo, addColor} from "../actions";
import {useDispatch, useSelector} from "react-redux";
// import setOfColors from "../data-colors";


const TodoListItem = ({todo}) => {
    const dispatch = useDispatch();
    const {text, id} = todo;
    const completed = useSelector(state => state.todos.find(item => item.id === id).completed);
    const colorNames = useSelector(state => state.filters.filterColors);
    // const colorNames = setOfColors;
    const [innerSelectColor, setInnerSelectColor] = useState("");

    const colorSetter = (e) => {
        dispatch(addColor(id, e.target.value));
        setInnerSelectColor(e.target.value);
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
                            onChange={colorSetter}
                            style={{color: innerSelectColor}}
                    >
                        {colorNames.map((color, index) =>
                            <option key={index} value={color}>{color.toUpperCase()}</option>)}
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