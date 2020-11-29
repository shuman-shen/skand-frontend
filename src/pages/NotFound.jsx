import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    color: 'grey',
    textAlign: 'center',
    marginTop: '5rem',
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">404 Not Found</Typography>
    </div>
  );
};

export default NotFound;
