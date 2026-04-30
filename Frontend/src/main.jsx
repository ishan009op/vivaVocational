import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout.jsx';
import Chat from './Components/Chat.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[{
      path:"/",
      element:<Layout/>
    },
  {
    path:"/ai-chat",
    element:<Chat/>
  }]
  }
])



createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
