import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    alignSelf: 'center',
    fontSize: '3rem',
    marginTop: '1rem',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem',
  },
  title: {
    fontWeight: 700,
    marginRight: '2rem',
    width: '7rem',
  },
});

const TextListItem = ({ title, content, Icon }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {Icon ? <Icon className={classes.icon} /> : null}
      <Box className={classes.textContainer}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography>{content}</Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default TextListItem;
