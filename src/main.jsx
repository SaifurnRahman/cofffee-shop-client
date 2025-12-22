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
import Login from './component/Login.jsx'
import SignUp from './component/SignUp.jsx'
import AuthProvider from './Auth Provider/AuthProvider.jsx'
import Users from './component/Users.jsx'
import UpdateUser from './component/UpdateUser.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component: Home
      },
      {
        path: '/coffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: '/updatecoffee/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: UpdateCofffe
      }
    ]
  },
  {
        path: '/addcofffee',
        Component: AddCoffee
      },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/signup',
    Component: SignUp
  },
  {
    path: '/users',
    loader: () => fetch('http://localhost:3000/users'),
    Component: Users
  },
  {
    path: '/updateuser/:id',
    loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UpdateUser
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
