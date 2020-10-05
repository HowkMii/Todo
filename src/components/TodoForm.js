import React, { useState, useContext, useEffect } from 'react'
import { TodoListContext } from '../contexts/TodoListContext'

const TodoForm = () => {
  const { addTodo, clearList, editTodo, editItem } = useContext(TodoListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTodo(title)
      setTitle('')
    } else {
      editTodo(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
        required
        className="todo-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-todo-btn">
          {editItem ? 'Edit Todo' : 'Add Todo'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TodoForm
