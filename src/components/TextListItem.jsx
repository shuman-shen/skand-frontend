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
    <Box data-testid='textListItem' className={classes.root}>
      {Icon ? <Icon data-testid='textListItem-icon' className={classes.icon} /> : null}
      <Box data-testid='textListItem-content' className={classes.textContainer}>
        <Typography data-testid='textListItem-text' className={classes.title}>{title}</Typography>
        <Typography data-testid='textListItem-text'>{content}</Typography>
      </Box>
      <Divider data-testid='textListItem-divider'/>
    </Box>
  );
};

export default TextListItem;
