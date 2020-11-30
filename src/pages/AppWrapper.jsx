import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import UserIndexPage from '../pages/UserIndexPage';
import { selectCurrentUser } from '../redux/user/userSelectors';
import SignInPage from './SignInPage';

const AppWrapper = ({ currentUser }) => {
  return currentUser ? <Route path="/userIndex" component={UserIndexPage} /> : <Route path='/signin' component={SignInPage} />;
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
 
});
export default connect(mapStateToProps)(AppWrapper);
