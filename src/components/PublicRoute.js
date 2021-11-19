import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLogesIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLogesIn && restricted;
  console.log(shouldRedirect);
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
