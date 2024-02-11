import React from 'react'

//todo application



function App() {
const  [todos,setTodos]=React.useState([{
  title:"Go to Gym",
  description:"Go to Gym at 7",
  completed: true},
  {
  title:"Go to Gym2",
  description:"Go to Gym at 9",
  completed: false

},
{
  title:"Go to Gym2",
  description:"Go to Gym at 9",
  completed: false

}]);

function addTodo(){
  setTodos([...todos,{
    title:"wergfdssaf",
    description:"gafdsfad"
  }])
}

  return (
    <div>
      <button onClick={addTodo}>Add random todo</button>
      {
        todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description} />
       
        })
      }
    </div>
  )
}

function Todo(props) {

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    </div>
}

export default App