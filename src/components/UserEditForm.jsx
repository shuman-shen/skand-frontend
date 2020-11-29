import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addNewUserStart, editUserStart } from '../redux/index/indexActions';
import { withRouter } from 'react-router-dom';
import UserEditFormContent from './UserEditFormContent';

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

const UserEditForm = ({
  initialEntry = newEntry,
  isNew = true,
  addNewUserStart,
  editUser,
  history,
}) => {
  return (
    <div>
      <Formik
        initialValues={initialEntry}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          isNew ? addNewUserStart(values) : editUser(values);
          setSubmitting(false);
          //resetForm(initialEntry);
          history.push('/userIndex');
        }}
      >
        <UserEditFormContent isNew={isNew} />
      </Formik>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewUserStart: (newUser) => dispatch(addNewUserStart(newUser)),
  editUser: (user) => dispatch(editUserStart(user)),
});
export default connect(null, mapDispatchToProps)(withRouter(UserEditForm));
