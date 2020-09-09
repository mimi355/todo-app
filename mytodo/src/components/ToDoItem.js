import React from 'react';
import Todo from './Todo';
function ToDoItem({todos,completed,deleted,edited}){

return(
  <div>
{todos.map((todo) => (<Todo  key={todo.id} todo={todo} completed={completed} deleted={deleted} edited={edited} />))}
</div>
)






}
export default ToDoItem;