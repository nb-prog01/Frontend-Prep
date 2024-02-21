import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [todos, setTodos] = useState([]);

//   ////gets stuck infinte loop thus using useEffect()
//   // axios.get("https://sum-server.100xdevs.com/todos")
//   // .then(function(response){
//   //   setTodos(response.data.todos)
//   // })

//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(function(response){
//       setTodos(response.data.todos)
//     })
//   },[]);

//   return (
//     <>
//       {todos.map(todo=><Todo title={todo.title} description={todo.description}/>)}
//     </>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h3>{description}</h3>
//   </div>
// }

//getting todo id from user and then rendering it

// function App() {
// const [selectedId, setSelectedId]=useState(1);

//   return <div>
//     <button onClick={function(){
//       setSelectedId(1);
//     }}>1</button>
//         <button onClick={function(){
//       setSelectedId(2);
//     }}>2</button>
//         <button onClick={function(){
//       setSelectedId(3);
//     }}>3</button>
//         <button onClick={function(){
//       setSelectedId(4);
//     }}>4</button>

//     <Todo id={selectedId} />
//   </div>
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({});

//   useEffect(()=>{
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//     .then(response=>{
//       setTodo(response.data.todo)
//     })
//   },[id])

//   return <div>
//     ID: {id}
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

// useMemo 
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  // const [count,setCount]=useState(0); 

  let count = useMemo(()=>{
    console.log("Memo got called");
    let finalcount=0;
    for (let i = 1; i <= inputValue; i++) {
      finalcount = finalcount + i;
    }
    return finalcount;
  },[inputValue]);

  // useEffect(()=>{
  //   console.log("useEffect got called");
  //   let finalcount=0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     finalcount = finalcount + i;
  //   }
  //   setCounter(finalcount);
  // },[inputValue]);

  ////Before using memo this computation would happen anytime the counter was clicked which is inefficient
  //// thus we define the count using useMemo which only changes the count once input value is changed
  //// can be done using useEffect too, but it causes one extra re render.
  // let count=0;
  // for (let i = 1; i <= inputValue; i++) {
  //   count = count + i;
  // }


  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App
