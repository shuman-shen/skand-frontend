import { styled } from '@material-ui/core/styles';
import { Typography, Toolbar } from '@material-ui/core';

export const NavToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const UserText = styled(Typography)({
  marginRight: '3rem',
});
