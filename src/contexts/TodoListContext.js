import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TodoListContext = createContext()

const TodoListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || []

  const [todos, setTodos] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const [editItem, setEditItem] = useState(null)

  
  const addTodo = title => {
    setTodos([...todos, { title, id: uuid() }])
  }

  
  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  
  const clearList = () => {
    setTodos([])
  }

 
  const findItem = id => {
    const item = todos.find(todo => todo.id === id)

    setEditItem(item)
  }

 
  const editTodo = (title, id) => {
    const newTodos = todos.map(todo => (todo.id === id ? { title, id } : todo))

    console.log(newTodos)

    setTodos(newTodos)
    setEditItem(null)
  }

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        clearList,
        findItem,
        editTodo,
        editItem
      }}
    >
      {props.children}
    </TodoListContext.Provider>
  )
}

export default TodoListContextProvider
