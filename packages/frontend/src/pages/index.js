import { lazy, memo } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import Media from 'react-media';
import { SystemLayout } from 'components/layout';
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';
import Currency from 'components/currency/Currency';

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
        element: <PrivateRoute redirectTo="/auth/login" component={<Home />} />,
        index: 'true',
        path: 'home',
      },
      {
        element: <PrivateRoute component={<Statistics />} />,
        path: 'statistics',
      },
      {
        element: (
          <PrivateRoute
            component={
              <Media query={{ maxWidth: 762 }}>
                {matches => (matches ? <Currency /> : <Home />)}
              </Media>
              // <Media query="(max-width: 767px)" render={() => <Currency />} />
            }
          />
        ),
        path: 'currency',
      },
    ],
  },
  // {
  //   element: <Navigate to={'/home'} />,
  //   path: '*',
  // },
];

const Router = () => <RouterProvider router={createBrowserRouter(routes)} />;

export default memo(Router);
