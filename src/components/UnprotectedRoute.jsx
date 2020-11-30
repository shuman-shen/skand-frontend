import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../redux/user/userSelectors';

const UnprotectedRoute = ({ children, currentUser, ...rest }) => {
  return <Route {...rest}>{!currentUser ? children : <Redirect to="/userIndex" />}</Route>;
};
const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(UnprotectedRoute);
