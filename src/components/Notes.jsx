import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'grey',
    fontSize: '0.8rem',
    marginTop: '2rem',
  },
  title: {
    fontWeight: 700,
  },
});

const Notes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>Test Account</Typography>
      <Typography>Username: test@skand.io</Typography>
      <Typography>Password: password</Typography>
    </div>
  );
};

export default Notes;
