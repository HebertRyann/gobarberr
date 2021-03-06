import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/signUp';
import Dashboard from '../pages/Dashboard';
import Route from '../routes/Route';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={SignIn} />
    <Route path='/signup' exact component={SignUp} />
    <Route path='/forgot-password' component={ForgotPassword} />
    <Route path='/reset-password' component={ResetPassword} />

    <Route path='/profile' component={Profile} isPrivate />
    <Route path='/dashboard' component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;