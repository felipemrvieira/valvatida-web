import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Page from '../pages/Page';
import Login from '../pages/Login';
import AdminSignIn from '../pages/Admin/SignIn';
import AdminRegister from '../pages/Admin/Register';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/page" component={Page} />
      <Route path="/login" component={Login} />
      <Route path="/admin/signin" component={AdminSignIn} />
      <Route path="/admin/register" component={AdminRegister} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}

// cadastro de admin do app
// login admin do app
// Cadastro de admin de escolas
// login de admin da escola
// Cadastro de escola
// Cadastro de professor
// cadastro de curso
