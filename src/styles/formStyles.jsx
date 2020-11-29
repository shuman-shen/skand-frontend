import { styled } from '@material-ui/core/styles';
import { Box, Button, TextField, FormControl, Typography } from '@material-ui/core';

export const FormBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  //alignItems: 'flex-start',
  marginTop: '2rem',
});

export const FormField = styled(TextField)({
  marginBottom: '0.5rem',
});

export const FormBtn = styled(Button)({
  width: '50%',
  marginTop: '1rem',
  marginBottom: '1rem',
  alignSelf: 'center',
});

export const FormCtrl = styled(FormControl)({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '0.5rem',
  color: 'grey',
});

export const FieldBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
});

export const FormHeading = styled(Typography)({
  textAlign: 'center',
  color: 'grey',
  paddingTop: '2rem',
});
