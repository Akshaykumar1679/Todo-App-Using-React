import { createContext,useReducer } from "react";
import React from 'react'

const TodoContext = createContext([]);

const TodoReducer=(currvalue,action)=>{
  let newtodo=currvalue;
 if(action.type==="NEW_ITEM"){
   newtodo=[...currvalue,{name:action.payload.todoname, date:action.payload.tododate}]
  return newtodo;
 }
if(action.type==="DELETE_ITEM"){
  newtodo= currvalue.filter((item)=>item.name!==action.payload.todoname)
  return newtodo;
}
  return newtodo;
}

export const TodoItemContext=({children})=> {
  
 const[tododata,DispachTodo]= useReducer(TodoReducer,[])

  let AddTodo=(todoname,tododate)=>{
     let AddNewTodo={
      type:"NEW_ITEM",
      payload:{
        todoname,
        tododate
      }
     }
     DispachTodo(AddNewTodo);  
  }
  const DeleteTodo=(todoname)=>{
   let DeleteTodoItem={
      type:"DELETE_ITEM",
      payload:{
        todoname
      }
    }
    DispachTodo(DeleteTodoItem)
  
   
  }
  return (
    <TodoContext.Provider value={{ tododata, AddTodo, DeleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}



export default TodoContext;
