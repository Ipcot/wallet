import { lazy, memo } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { SystemLayout } from 'components/layout';
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';

const Login = lazy(() => import('./login'));
const Register = lazy(() => import('./register'));
const Statistics = lazy(() => import('./statistics/Statistics'));
const Home = lazy(() => import('./home'));

const routes = [
  {
    path: 'auth',
    children: [
      {
        element: <PublicRoute component={<Login />} />,
        path: 'login',
      },
      {
        element: <PublicRoute component={<Register />} />,
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
        index: 'true',
        path: 'home',
      },
      {
        element: <PrivateRoute component={<Statistics />} />,
        path: 'statistics',
      },
    ],
  },
  {
    element: <Navigate to={'/home'} replace />,
    path: '*',
  },
];

const Router = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default memo(Router);
