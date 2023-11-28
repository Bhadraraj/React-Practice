import React ,{useState}from 'react';
import TaskList from './TaskList';
import AddTodo from './AddTodo';


const Todo = () => {

    const initialTodos=[
        {id:0, title:'Html', done :true},
        {id:0, title:'CSS', done :true},
        {id:0, title:'JavaScript', done :true},
    ]
    const [todos,setTodos]= useState(initialTodos);
  return (
    <div>
        <h2>Todo List </h2>
        <TaskList todos={todos}/>
      
    </div>
  )
}

export default Todo
