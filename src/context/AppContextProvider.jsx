import React, { createContext, useContext, useReducer } from 'react'
import { appReducer, todoAction } from '../reducer/appReducer';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos'))?? [],
  addTodo:(data) =>{},
  removeTodo:(id) =>{},
  removeAllTodos:() =>{},
  updateTodo:(status,id) =>{},

}
const AppContext = createContext(initialState)
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTodo = (data) => {
    const newTodo = {
      id: generateId(),
      content: data,
      completed: false
    }
    const updatedTodos = state.todos.concat(newTodo);
    dispatch({
      type: todoAction.ADD_TODO,
      payload: updatedTodos
    })
    saveLocalStorage(updatedTodos);
  }

  const removeTodo = (id) => {
    const updatedTodos = state.todos.filter(todo => todo.id !== id);
    dispatch({
      type: todoAction.REMOVE_TODO,
      payload: updatedTodos
    })
    saveLocalStorage(updatedTodos);
  }

  const removeAllTodos = () =>{
    dispatch({type:todoAction.REMOVE_ALL})
    localStorage.clear('todos');
  }
  const updateTodo = (status,id) =>{
    console.log(status,id)
    const updatedTodos = state.todos.map(todo => todo.id === id ? {...todo,completed:status}:todo);
    dispatch({type:todoAction,payload:updatedTodos})
    saveLocalStorage(updatedTodos)
  }
  const generateId = () => {
    return Math.random();
  }
  const saveLocalStorage = (todos) =>{
    localStorage.setItem('todos',JSON.stringify(todos));
    const refreshedTodos = JSON.parse(localStorage.getItem('todos'));
    dispatch({
      type:todoAction.REFRESH,
      payload:refreshedTodos,
    })
  }
  const value = {
    todos: state.todos,
    updateTodo,
    addTodo,
    removeTodo,
    removeAllTodos
  }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const GlobalState = () => {
  const context = useContext(AppContext);
  return context;
}