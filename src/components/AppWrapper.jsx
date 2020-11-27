import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import UserIndexPage from '../pages/UserIndexPage';

const AppWrapper = ({ currentUser }) => {
  return currentUser ? <Route path="/" component={UserIndexPage} /> : <Redirect to="signin" />;
};

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});
export default connect(mapStateToProps)(AppWrapper);
