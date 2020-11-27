import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import SignInPage from './pages/SignInPage';
import NavBar from './components/NavBar';
import UserIndexPage from './pages/UserIndexPage';
import AppWrapper from './components/AppWrapper';
import UserEditPage from './pages/UserEditPage';
import UserDetailsPage from './pages/UserDetailsPage';
import NotFound from './pages/NotFound';
import AppSnackbar from './components/AppSnackbar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <Route path="/userIndex/edit/:id" component={UserEditPage} />
        <Route path="/userIndex/view/:id" component={UserDetailsPage} />
        <Route path="/userIndex" component={UserIndexPage} />
        <Route path="/404" component={NotFound} />
        <Route exact path="/" component={AppWrapper} />
      </Switch>
      <AppSnackbar />
    </div>
  );
}

export default App;
