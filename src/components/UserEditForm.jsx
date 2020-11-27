import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, FormControl, FormControlLabel, Switch } from '@material-ui/core';
import { connect } from 'react-redux';
import { addNewUser, editUser } from '../redux/index/indexActions';
import { withRouter } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  first_name: Yup.string().required().min(3).label('First Name'),
  last_name: Yup.string().required().min(3).label('Last Name'),
  jobs_count: Yup.number().min(0).required().label('Jobs Count'),
  active: Yup.boolean().required().label('Active'),
  slack_username: Yup.string().min(3).label('Slack Username'),
});
const newEntry = {
  email: '',
  first_name: '',
  last_name: '',
  jobs_count: 0,
  active: true,
  slack_username: '',
};

const UserEditForm = ({ initialEntry = newEntry, isNew = true, addNewUser, editUser, history }) => {
  return (
    <div>
      <Formik
        initialValues={initialEntry}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // add a redux action here

          isNew ? addNewUser(values) : editUser(values);
          setSubmitting(false);

          history.push('/userIndex');
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
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
              id="standard-first-name-input"
              label="First Name"
              type="text"
              name="first_name"
              autoComplete="given-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.first_name}
              error={!!(touched.first_name && errors.first_name)}
              helperText={touched.first_name && errors.first_name}
            />
            <TextField
              id="standard-last-name-input"
              label="Last Name"
              type="text"
              name="last_name"
              autoComplete="family-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.last_name}
              error={!!(touched.last_name && errors.last_name)}
              helperText={touched.last_name && errors.last_name}
            />
            <TextField
              id="standard-jobs-count-input"
              label="Jobs Count"
              type="number"
              name="jobs_count"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.jobs_count}
              error={!!(touched.jobs_count && errors.jobs_count)}
              helperText={touched.jobs_count && errors.jobs_count}
            />
            <FormControl>
              <FormControlLabel
                control={<Switch size="medium" checked={values.active} onChange={handleChange} />}
                label="Active"
                name="active"
                labelPlacement="start"
              />
            </FormControl>

            <TextField
              id="standard-slack-username-input"
              label="Slack Username"
              type="text"
              name="slack_username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.slack_username}
              error={!!(touched.slack_username && errors.slack_username)}
              helperText={touched.slack_username && errors.slack_username}
            />

            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
              {isNew ? `Add` : `Update`}
            </Button>
          </Box>
        )}
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewUser: (newUser) => dispatch(addNewUser(newUser)),
  editUser: (user) => dispatch(editUser(user)),
});
export default connect(null, mapDispatchToProps)(withRouter(UserEditForm));
