import React, { useContext } from 'react'
import TodoContext from '../store/TodoItemContext';


function TodoMessage() {
  const {tododata}=useContext(TodoContext);
  return( tododata.length==0 && <div className='w-[90vw] h-[80vh] flex justify-center items-center'>
    <p className='text-3xl font-semibold'>Enjoy your Day</p>
</div>
   
  )   
  
}

export default TodoMessage