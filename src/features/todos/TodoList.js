import React from 'react'
import TodoListItem from "./TodoListItem";
import {useSelector} from 'react-redux';

const selectTodos = state => state.todos;
const selectFilterStatus = state => state.filters.filterStatus;

const TodoList = () => {
    const todos = useSelector(selectTodos);
    const status = useSelector(selectFilterStatus);

    const todo = (item) => <TodoListItem key={item.id} todo={item}/>;

    const renderToDos = (status) => {
        switch (status) {
            case "All":
                return () => todos.map((item) => {
                    return todo(item);
                });
            case "Active":
                return () => todos.map((item) => {
                    if (item.completed) return false
                    return todo(item);
                });
            case "Completed":
                return () => todos.map((item) => {
                    if (!item.completed) return false
                    return todo(item);
                });
            default:
                return () => todos.map((item) => {
                    return todo(item);
                });
        }
    }

    return (
        <ul className="todo-list">
            {renderToDos(status)()}
        </ul>
    )
}
export default TodoList;
