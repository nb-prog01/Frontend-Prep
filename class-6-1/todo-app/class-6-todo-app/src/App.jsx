import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter=4;

function App() {
  const [todos, setTodos]=useState([{
    id:1,
    title:"Todo number 1 title",
    description:"Todo number 1 description"
  },{
    id:2,
    title:"Todo number 2 title",
    description:"Todo number 2 description"
  },{
    id:3,
    title:"Todo number 3 title",
    description:"Todo number 3 description"
  }])

  function addTodo(){
    // Using spread operator.

    setTodos([...todos, {
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }])

    // const newTodos=[];

    // for(let i=0;i<todos.length;i++){
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   id:counter++,
    //   title:Math.random(),
    //   descrption:Math.random()
    // })
    // setTodos(newTodos);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a ToDo</button>
{/* way 1 */}
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)} 
{/* way 2 */}
      {/* {todos.map(function(todo){
        return <Todo title={todo.title} descrption={todo.description}></Todo>
      })} */}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
