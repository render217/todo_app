import React, { useRef } from 'react'
import { GlobalState } from '../context/AppContextProvider';

export const Form = () => {
  const {addTodo} = GlobalState(); 
  const inputRef = useRef(null);
  const submitForm = (e)=>{
    e.preventDefault();
    const enteredTodo = inputRef.current.value;
    if(!enteredTodo){
      return;
    }
    addTodo(enteredTodo);
    inputRef.current.value = ''
  }
  return (
    <form onSubmit={submitForm}>
        <div className='flex gap-4'>
          <input ref={inputRef} className='flex-1 py-2 px-2 rounded-xl outline-0 border border-gray-300' type="text" placeholder='add detail' />
          <button className='text-sm bg-blue-600 text-white w-20 rounded-xl'>Add</button>
        </div>
      </form>
  )
}
