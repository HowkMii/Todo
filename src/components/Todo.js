import React, { useContext } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'

const Todo = ({ todo }) => {
  const { removeTodo, findItem } = useContext(TodoListContext)
  return (
    <li className="list-item">
      <span>{todo.title} </span>
      <div>
        <button
          className="btn-delete todo-btn"
          onClick={() => removeTodo(todo.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit todo-btn" onClick={() => findItem(todo.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  )
}

export default Todo
