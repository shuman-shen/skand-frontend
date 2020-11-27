import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/userActions';
import { withRouter, Redirect } from 'react-router-dom';
import apiAuth from '../services/auth';
import { openSnackbar } from '../redux/snackbar/snackbarActions';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().required().min(3).label('Password'),
});

const SignInPage = ({ setCurrentUser, currentUser, openSnackbar, history }) => {
  useEffect(() => {
    // fetch('/api/v2/users/tokens', {
    //   method: 'post',
    //   body: JSON.stringify({ email: 'test@skand.io', password: 'password' }),
    // }).then((res) => {
    //   console.log(res.headers.map.authorization);
    // });
  }, []);

  const userSignIn = async (values) => {
    const res = await apiAuth.signIn(values);
    console.log(res);
  };
  if (currentUser) return <Redirect to="/userIndex" />;
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // add a redux action here
          //const res = await apiAuth.signIn(values);
          fetch('/api/v2/users/tokens', {
            method: 'post',
            body: JSON.stringify(values),
          }).then((res) => {
            setSubmitting(false);
            if (res.ok) {
              localStorage.setItem('skandToken', res.headers.map.authorization);
              setCurrentUser(values.email);
              history.push('/userIndex');
            } else if (res.status === 401) {
              openSnackbar({ type: 'warning', message: 'Email does not match the password' });
            } else {
              openSnackbar({ type: 'error', message: 'Unknown Error' });
            }
          });

          //
          //if (res.ok) ;

          //history.push('/userIndex');
          //   }
          // });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-username-input"
              label="Email"
              type="email"
              name="email"
              autoComplete="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={!!(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={!!(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  openSnackbar: (info) => dispatch(openSnackbar(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInPage));
