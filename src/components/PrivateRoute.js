import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLogesIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLogesIn ? children : <Redirect to="/login/" />}
    </Route>
  );
}
