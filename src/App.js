import { Switch, Route } from 'react-router-dom';

import Home from './views/Home/Home';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Contacts from './views/Contacts/Contacts';
import Layout from './components/Layout/Layout';
import AppBar from './components/AppBar/AppBar';

export default function App() {
  return (
    <Layout>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </Layout>
  );
}
