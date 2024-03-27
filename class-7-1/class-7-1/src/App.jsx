import { Suspense, lazy, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const  Landing  = lazy(()=> import('./components/Landing'))
const  Dashboard  = lazy(()=>import('./components/Dashboard'))
import { CountContext } from './context'

//ROUTING

// function App() {
  
//   return(
//   <div>
    
//       <BrowserRouter>
//       <Appbar/>
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
//           <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
//         </Routes>
//       </BrowserRouter>
//   </div>
//   )    
  
// }

// function Appbar(){
//   const navigate=useNavigate();
//   return(<div>
//     <div>
//     <button onClick={()=>{
//       navigate("/");
//     }}>Landing page</button>
//     <button onClick={()=>{
//     navigate("/dashboard");;
//     }}>Dashboard page</button>
//   </div>
//   </div>
//   )
// }


//prop driling/Context API

function App(){
  const [count,useCount]=useState(0);
  return(<div>
    <CountRendered.Provider value={count}>
      {/* removed count from here */}
        <Count setCount={setCount}/> 
    </CountRendered.Provider>
    
  </div>

  )
}

function Count({setCount}){
  return <div>
    <CountRendered/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRendered(){
  const count=useContext(CountContext)
  return<div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count=useContext(CountContext)
  return<div>
    <button onClick={()=>{
        setCount(count+1)
    }}>Increase</button>
        <button onClick={()=>{
        setCount(count-1)
}}>Decrease</button>
  </div>

}

export default App
