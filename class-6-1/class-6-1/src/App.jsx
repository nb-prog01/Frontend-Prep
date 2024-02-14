import React, { Fragment } from "react";
import { useState } from "react";


function App(){
  const [title, setTitle]=useState("My name is Niraj");

  function updateTitle(){
    setTitle("My name is "+Math.random());
  }
  return(
    <div> 

    {/* <HeaderWithButton/> */}
    <button onClick={updateTitle}>Click me to change the title</button><br/>
    <Header title={title}></Header>
    <Header title="Niraj2"></Header>
    <Header title="Niraj3"></Header>
    <Header title={title}></Header>
    <Header title="Niraj5"></Header>
    <Header title="Niraj6"></Header>
    <Header title="Niraj7"></Header>
   
    </div>
  )

}
// pushed down the state to HeaderWithButton to minimize the re-rendering 

// function HeaderWithButton(){
//   const [title, setTitle]=useState("My name is Niraj");

    
// function updateTitle(){
//   setTitle("My name is "+Math.random());
// }

//   return <><button onClick={updateTitle}>Click me to change the title</button><br/>
//   <Header title={title}></Header></>
// }

const Header=React.memo(function Header({title}){
  return<div><h1>
    {title}</h1>
  </div>
})


export default App
