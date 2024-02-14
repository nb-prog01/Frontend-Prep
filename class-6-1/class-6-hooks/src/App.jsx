import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todos,setTodos]=useState([])

  // for polling todos every 10secs

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res){
          const json=await res.json();
          setTodos(json.todos);
      })
    },10000)
  },[])

  return (
    <>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}

    </>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App
