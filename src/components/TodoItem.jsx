import React, {  useContext } from 'react'
import { MdDeleteSweep } from "react-icons/md";
import TodoContext from '../store/TodoItemContext';


function TodoItem({todoname,tododate,}) {
   const {DeleteTodo}=useContext(TodoContext)
    
  return (
    
  
     <div className='flex justify-center items-center gap-2'>
         <div className='grid grid-cols-12 min-w-[800px] my-2'>
    <div className='min-w-10  col-span-4'>{todoname}</div> 
    <div className='min-w-10 col-span-4 '>{tododate}</div> 
    
    <button className='border-2 rounded py-2  border-black col-span-2 bg-red-700 flex  justify-center text-4xl' onClick={()=>DeleteTodo(todoname)} ><MdDeleteSweep /></button>
  </div>
  
 

     </div>
  
  )
}

export default TodoItem;