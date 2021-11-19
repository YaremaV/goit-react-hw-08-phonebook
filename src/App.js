import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';
import { authOperation, authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const Home = lazy(() => import('./views/Home/Home'));
const Register = lazy(() => import('./views/Register/Register'));
const Login = lazy(() => import('./views/Login/Login'));
const Contacts = lazy(() => import('./views/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getIsLoading);
  console.log(isLoading);
  useEffect(() => {
    dispatch(authOperation.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <Layout>
        <AppBar />
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <PublicRoute exact path="/">
              <Home />
            </PublicRoute>
            <PublicRoute path="/register">
              <Register />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted>
              <Login />
            </PublicRoute>
            <PrivateRoute path="/contacts" restricted>
              <Contacts />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Layout>
    )
  );
}
