import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../redux/user/userSelectors';

const ProtectedRoute = ({ children, currentUser, ...rest }) => {
  //   const { pathname, search } = useLocation();

  return <Route {...rest}>{currentUser ? children : <Redirect to={`/signin`} />}</Route>;
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
