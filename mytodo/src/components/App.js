import React,{useState} from 'react';
import ToDoItem from './ToDoItem';
import './App.css';
import TodoForm from './TodoForm';
function App() {



//state for ToDoItem
const[todos,setTodos]=useState([

{ task:"Book flight to nice", id:"0", isDone:false, isEdited:false   },
{ task:"Beach party", id:"1", isDone:false, isEdited:false   },
{ task:"create a todo app", id:"2", isDone:false, isEdited:false   },
])


// additem
  const addItem=(newTodo)=>{
    setTodos (newTodo.task.trim() && [...todos,newTodo])
    
}
// task is completed
const completed=(id)=>{
  setTodos(todos.map(todo=> todo.id===id ? {...todo,isDone:!todo.isDone}:todo))
}
//task isdeleted
const deleted=(id)=>{

  setTodos(todos.filter(todo=> todo.id!==id))


}
//task is edited

const edited=(id,newText)=>{ setTodos(todos.map(todo=>todo.id===id? {...todo,task:newText}:todo))}




  return (
    <div className="App">
      <div className=" todoForm">
            <h1>React To Do APP! </h1>
           <TodoForm addItem={addItem}/>
        </div>
        <div className='list'> 

  <ToDoItem    todos={todos} completed={completed} deleted={deleted} edited={edited}/>

</div>
    </div>
  );
}

export default App;
