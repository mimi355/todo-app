import React from 'react';
import EditModal from './EditModal';
function Todo({todo,completed,deleted,edited}){

  const  handleComplete=()=>{
      
      alert("Good Job You Have Completed Your Task")
      completed(todo.id)
     
  };


  const handleDelete=()=>{
      deleted(todo.id)
  }


    return(

       <ul>
        <li>
        <i   onClick= {handleComplete} class="fas fa-check-circle"></i>
        <p  style={{textDecoration:todo.isDone &&"line-through"}}> {todo.task}</p>   
       
       <i  onClick={handleDelete} class="fas fa-trash-alt" ></i>
        <EditModal todo={todo} edited={edited} />
          
        </li>
        </ul>
        
    )
}
export default Todo;