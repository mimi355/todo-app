import React,{useState} from 'react';

function TodoForm({addItem}){

    const[inputText,setInputText]=useState("")           // state for input 
function handleChange(e){
const newValue=e.target.value;
setInputText(newValue)
}
const add=()=>{
addItem({
id:Math.random(),
task:inputText,
isDone:false,
isEdited:false

})
setInputText("")
}




    return(
        <div  className='text-addtodo' >
        <input  onChange={handleChange}   value={inputText} type='text' name='todo' placeholder='Enter your task here....' />
        <button   onClick={add}     className='btn' type='submit' >Add</button>
        </div>

    )
}
export default TodoForm;