import React, {  useContext, useRef } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import TodoContext from '../store/TodoItemContext';

function TodoInput() {
  const todonameElement = useRef("");
  const tododateElement = useRef("");
  let {AddTodo}=useContext(TodoContext);
 
  let handleInput = (event) => {
    event.preventDefault();
    const todoname = todonameElement.current.value;
    const tododate = tododateElement.current.value;
    todonameElement.current.value = "";
    tododateElement.current.value = "";
    if (todoname && tododate) {
      AddTodo(todoname, tododate);
    } else {
      console.log("fill todo name first");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Todo App</h1>

      <form
        onSubmit={handleInput}
        className="grid grid-cols-12 min-w-[800px] gap-2"
      >
        <input
          className="border-2 border-black col-span-4 p-2"
          type="text"
          ref={todonameElement}
          placeholder="Enter the Todo items"
        />
        <input
          className="border-2 border-black p-2 col-span-4"
          ref={tododateElement}
          type="date"
        />
        <button className="border-2 rounded py-2  border-black col-span-2 bg-blue-700 flex  justify-center text-4xl">
          <MdAddCircleOutline />
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
