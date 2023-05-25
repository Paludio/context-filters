import { Route, Switch } from 'react-router-dom';
import Analytics from '../pages/analytics/Analytics';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register.jsx';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/analytics" component={ Analytics } />
      <Route path="/register" component={ Register } />
    </Switch>
  );
}
