import React from 'react'
import { Form } from './Form'
import { Todo } from './Todo'
import { GlobalState } from '../context/AppContextProvider'

export const All = () => {
  const { todos } = GlobalState();
  let content;
  if (todos.length === 0) {
    content = <p className='my-4 text-2xl text-center'>Empty Todo list.</p>
  }
  if (todos.length > 0) {
    content = todos.map(todo => <Todo key={todo.id} todo={todo} />)
  }
  return (
    <div>
      <Form />
      {content}
    </div>
  )
}

