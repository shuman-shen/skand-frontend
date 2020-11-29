import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { signInStart } from '../redux/user/userActions';
import { withRouter, Redirect } from 'react-router-dom';
import StyledSignInForm from './SignInFormContent';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().required().min(3).label('Password'),
});

const SignInForm = ({ currentUser, history, signInStart }) => {
  if (currentUser) return <Redirect to="/" />;
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        signInStart(values);
        setSubmitting(false);
        history.push('/userIndex');
      }}
    >
      <StyledSignInForm />
    </Formik>
  );
};

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signInStart: (user) => dispatch(signInStart(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInForm));
