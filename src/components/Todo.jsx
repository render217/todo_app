import React, { useState } from 'react'
import { GlobalState } from '../context/AppContextProvider';

export const Todo = ({ endIcon = '',  onDelete,todo }) => {
    const {updateTodo} = GlobalState();
    const {content,id,completed} = todo;
    const [isChecked, setIsChecked] = useState(completed);

    const handleClick = () =>{
        if(isChecked){
            setIsChecked(false)
            updateTodo(false,id)

        }else{
            setIsChecked(true)
            updateTodo(true,id)
        }
        
    }
    return (
        <div className='flex items-center justify-between'>
            <div className='flex gap-2 my-3 cursor-pointer' onClick={handleClick}>
                <input type="checkbox" checked={isChecked} readOnly/>
                <p className={`text-sm max-[300px]:text-xs ${isChecked && 'line-through'}`}>{content}</p>
            </div>
            {endIcon && (
                <div onClick={()=>onDelete(id)}>
                    <i className={`${endIcon} px-2 py-2 text-sm cursor-pointer`}></i>
                </div>
            )}
        </div>
    )
}
