

import './App.css'
import TodoInput from './components/todo-input'
import TodoItems from './components/TodoItems'
import TodoMessage from './components/TodoMessage';
import {TodoItemContext} from './store/TodoItemContext';

function App() {
 
  
  return<>
  <TodoItemContext>
    <center className='flex flex-col gap-2'>
  <TodoInput  />
  <TodoMessage />
  <TodoItems  />
  </center>
   </TodoItemContext>
    
  
  
  </> 
    
}

export default App
