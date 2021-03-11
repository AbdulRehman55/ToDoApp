import React from 'react';
import Todo from './todo';

const Todolist=({todos,setToDos,filteredToDos})=>{
  console.log(todos+"yoman" )
    return(
        <div className="todo-container">
        <ul className="todo-list">
          {filteredToDos.map((todo=>(
          <Todo todo={todo} setToDos={setToDos} todos={todos} key={todo.id} text={todo.text}/>)))
          }
        </ul>

      </div>
    )
}

export default Todolist;