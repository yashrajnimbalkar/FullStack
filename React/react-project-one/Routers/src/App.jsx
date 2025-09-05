
import './App.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Parameter from './components/Parameter'
import { createBrowserRouter, RouterProvider } from "react-router";
import Courses from './components/Courses'
import Tests from './components/Tests'
import NotFound from './components/NotFound'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'courses', // Path relative to the parent `/dashboard`
        element: <Courses />
      },
      {
        path: 'test', // Path relative to the parent `/dashboard`
        element: <Tests />
      }
    ]
  },
  {
    path: '/:id',
    element: <Parameter />
  },
  {
    path:'*',
    element:<NotFound/> 
  }
]);





function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
