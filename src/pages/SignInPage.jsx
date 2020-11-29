import React from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { signInStart } from '../redux/user/userActions';
import { withRouter, Redirect } from 'react-router-dom';
import SignInForm from '../components/SignInForm';
import Notes from '../components/Notes';

const SignInPage = ({ currentUser }) => {
  if (currentUser) return <Redirect to="/" />;
  return (
    <Container maxWidth="sm">
      <SignInForm />
      <Notes />
    </Container>
  );
};

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signInStart: (user) => dispatch(signInStart(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInPage));
