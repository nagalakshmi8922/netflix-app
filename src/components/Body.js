import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';


const Body = () => {
 // const navigate=useNavigate();
    const appRouter = createBrowserRouter([
        {path: '/', element:<Login/>},
        {path: '/login', element:<Login/>},
        {path:'/browse', element:<Browse/>}
    ])
 

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )

}

export default Body