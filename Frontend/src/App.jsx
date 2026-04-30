import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chat from "./Components/Chat"
import Hero from './Components/Home'
import Navbar from './Components/Navbar'
import Courses from './Components/Courses'
import Programs from './Components/Program'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import AiButton from './Components/Aibutton'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default App
