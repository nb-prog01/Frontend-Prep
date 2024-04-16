import {BrowserRouter,Routes, Route} from "react-router-dom"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Blog } from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { PublishBlogs } from "./pages/PublshBlog"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/blog/:id" element={<Blog />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/publish" element={<PublishBlogs />}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
