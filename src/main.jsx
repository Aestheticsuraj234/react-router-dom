import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
   path:"/",
   element:<App/>,
   children:[
    {
      path:"",
      element:<Home/>
    },

    {
      path:"about",
      element:(
        <h1>About</h1>
      )
    },

    {
      path:"contact",
      element:(
        <h1>Contact</h1>
      )
    },

   ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
