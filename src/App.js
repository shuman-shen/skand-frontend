import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage';
import NavBar from './components/NavBar';
import UserIndexPage from './pages/UserIndexPage';
import UserEditPage from './pages/UserEditPage';
import UserDetailsPage from './pages/UserDetailsPage';
import NotFound from './pages/NotFound';
import AppSnackbar from './components/AppSnackbar';
import ProtectedRoute from './components/ProtectedRoute';
import UnprotectedRoute from './components/UnprotectedRoute';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <UnprotectedRoute path="/signin" component={SignInPage} />
        <ProtectedRoute path="/userIndex/edit/:id" component={UserEditPage} />
        <ProtectedRoute path="/userIndex/view/:id" component={UserDetailsPage} />
        <ProtectedRoute path="/userIndex" component={UserIndexPage} />
        <Route path="/404" component={NotFound} />
        <Redirect exact from="/" to="/userIndex" />
        <Redirect to="404" />
      </Switch>
      <AppSnackbar />
    </div>
  );
}

export default App;
