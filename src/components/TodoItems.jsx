import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import TodoContext from '../store/TodoItemContext';

function TodoItems() {
  const {tododata}=useContext(TodoContext);

  return (
    
         
    <div className='p-2'>{tododata.map((items)=><TodoItem key={items.name} todoname={items.name} tododate={items.date} />)}</div>
    

  )
}

export default TodoItems