import React from 'react'
import TodoListItem from "./TodoListItem";
import {useSelector} from 'react-redux';

const selectTodos = state => state.todos;


const TodoList = () => {
    const todos = useSelector(selectTodos);

    // console.log(todos);
    return (
        <ul className="todo-list">
            {
                todos.map((item) => {
                    return <TodoListItem key={item.id} todo={item}/>
                })
            }
        </ul>
    )
}

export default TodoList
