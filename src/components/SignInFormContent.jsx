import React from 'react';
import { useFormikContext } from 'formik';
import { FormBox, FormBtn, FormField } from '../styles/formStyles';

const SignInForm = () => {
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

      <FormBtn variant="contained" color="primary" type="submit" disabled={isSubmitting}>
        Login
      </FormBtn>
    </FormBox>
  );
};

export default SignInForm;
