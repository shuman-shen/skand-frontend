import React from 'react';
import { useFormikContext } from 'formik';
import { FormControlLabel, Switch } from '@material-ui/core';
import { FormField, FormBox, FormBtn, FormCtrl, FieldBox } from '../styles/formStyles';

const UserEditFormContent = ({ isNew }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormikContext();
  return (
    <FormBox component="form" onSubmit={handleSubmit}>
      <FormField
        required
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

      <FormField
        required
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
      <FormField
        required
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
      <FieldBox>
        <FormField
          required
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
        <FormCtrl>
          <FormControlLabel
            control={<Switch size="medium" checked={values.active} onChange={handleChange} />}
            label="Active"
            name="active"
            labelPlacement="start"
          />
        </FormCtrl>
      </FieldBox>

      <FormField
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

      <FormBtn variant="contained" color="primary" type="submit" disabled={isSubmitting}>
        {isNew ? `Add` : `Update`}
      </FormBtn>
    </FormBox>
  );
};

export default UserEditFormContent;
