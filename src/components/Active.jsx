import React from 'react'
import { Form } from './Form'
import { Todo } from './Todo'
import { GlobalState } from '../context/AppContextProvider'

export const Active = () => {
  const { todos } = GlobalState();
  const filterdTodos = todos.filter(todo => todo.completed === false);
  return (
    <div>
      <Form />
      <div>
        {filterdTodos.map(todo => <Todo key={todo.id} todo={todo} />)}
        {todos.length === 0 && <p className='my-4 text-2xl text-center'>No active Todo.</p>}
      </div>
    </div>
  )
}
