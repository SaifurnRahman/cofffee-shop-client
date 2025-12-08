import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Home from './component/Home.jsx'
import AddCoffee from './component/AddCoffee.jsx'
import UpdateCofffe from './component/UpdateCofffe.jsx'
import CoffeeDetails from './component/CoffeeDetails.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    Component : MainLayout,
    children: [
      {
        index : true,
        loader:()=>  fetch('http://localhost:3000/coffees'),
        Component : Home
      },
      {
        path : '/addcofffee',
        Component: AddCoffee
      },
      {
        path: '/coffee/:id',
        loader : ({params})=> fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: '/updatecoffee/:id',
       loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)   ,
        Component: UpdateCofffe
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
