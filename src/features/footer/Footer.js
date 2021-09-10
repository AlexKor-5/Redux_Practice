import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {markAllCompleted, clearCompleted} from "../actions";

const RemainingTodos = ({count}) => {
    return (
        <div className="todo-count">
            <h5>Remaining Todos</h5>
            <strong>{count}</strong>
        </div>
    )
}

const StatusFilter = () => {
    return (
        <div className="filters statusFilters">
            <h5>Filter by Status</h5>
            <ul>
                <li>
                    <button className="selected">All</button>
                </li>
                <li>
                    <button className="">Active</button>
                </li>
                <li>
                    <button className="">Completed</button>
                </li>
            </ul>
        </div>
    )
}


const ColorFilters = ({color = "#000000"}) => {
    return (
        <div className="filters colorFilters">
            <h5>Filter by Color</h5>
            <form className="colorSelection">
                <label>
                    <input type="checkbox" name="green"/>
                    <span className="color-block" style={{backgroundColor: "green"}}>{""}</span>
                    Green
                </label>

                <label>
                    <input type="checkbox" name="green"/>
                    <span className="color-block" style={{backgroundColor: "red"}}>{""}</span>
                    Red
                </label>

                <label>
                    <input type="checkbox" name="green"/>
                    <span className="color-block" style={{backgroundColor: "blue"}}>{""}</span>
                    Blue
                </label>
            </form>
        </div>
    )
}

const Footer = () => {
    const dispatch = useDispatch();

    const selectIds = (state) => {
        let arrIds = [];
        let completedToDos = state.todos.filter(todo => todo.completed);
        if (completedToDos.length !== 0) {
            arrIds = completedToDos.map(todo => todo.id);
        }
        return arrIds;
    };
    const ids = useSelector(selectIds);

    return (
        <footer className="footer">
            <div className="actions">
                <h5>Actions</h5>
                <button className="button"
                        onClick={() => dispatch(markAllCompleted())}>
                    Mark All Completed
                </button>
                <button className="button" onClick={() => dispatch(clearCompleted(ids))}>
                    Clear Completed
                </button>
            </div>

            <RemainingTodos/>
            <StatusFilter/>
            <ColorFilters/>
        </footer>
    )
}

export default Footer
