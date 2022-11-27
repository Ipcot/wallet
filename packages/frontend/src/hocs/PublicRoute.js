import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn;
  console.log('isLoggedIn: ', isLoggedIn);
  console.log('shouldRedirect: ', shouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
