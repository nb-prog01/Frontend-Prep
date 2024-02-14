import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//Returning a component
// function App() {
//   return (
//     <>
//       <CardWrapper innerComponent={<TextComponent/>}/>
//       <CardWrapper innerComponent={<TextComponent2/>}/>
//       <TextComponent2/>
//       <TextComponent/>
//     </>
//   )
// }

// function CardWrapper({innerComponent}){
//   return (
//     <div style={{border:"2px solid grey", padding:20}}>
//       {innerComponent}
//     </div>
//   )
// }

// function TextComponent(){
//   return (
//     <div>
//       Hello There!!!
//     </div>
//   )
// }
// function TextComponent2(){
//   return (
//     <div>
//       Hello There second!!!
//     </div>
//   )}

//real wrapper
function App() {

  return (
    <>
      <CardWrapper>
        Hi there!!!
      </CardWrapper>
      <CardWrapper>
        Hi there again!!!
      </CardWrapper>
      <CardWrapper>
        Hi there thrice!!!
      </CardWrapper>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
      <CardWrapper>
        <CardWrapper>
          Hi there from nested wrapper!!!
        </CardWrapper>
      </CardWrapper>
      
    </>
  )
}

function CardWrapper({children}){
  return (
    <div style={{border:"2px solid green", padding:15}}>
      {children}
    </div>
  )
}

function TextComponent(){
  return (
    <div>
      Hello There from component!!!
    </div>
  )
}



export default App
