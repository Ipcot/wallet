import { lazy, memo } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { SystemLayout } from 'components/layout'

const Login = lazy(() => import('./login'))
const Register = lazy(() => import('./register'))
const Statistics = lazy(() => import('./statistics'))
const Home = lazy(() => import('./home'))

const routes = [
  {
    path: 'auth',
    children: [
      {
        element: <Login />,
        path: 'login',
      },
      {
        element: <Register />,
        path: 'register',
      },
    ],
  },
  {
    path: '',
    element: <SystemLayout />,
    children: [
      {
        element: <Navigate to={'/home'} replace />,
        path: '',
      },
      {
        element: <Home />,
        index: "true",
        path: 'home',
      },
      {
        element: <Statistics />,
        path: 'statistics',
      }
    ],
  },
  {
    element: <Navigate to={'/home'} replace />,
    path: '*',
  },
]

const Router = () => <RouterProvider router={createBrowserRouter(routes)} />

export default memo(Router)