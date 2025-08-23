import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/play',
      element: <Game/>
    }
  ]);

  return (
    <div className='w-screen h-screen'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
