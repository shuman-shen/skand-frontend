import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/userActions';
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ currentUser, setCurrentUser, history }) => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Button component={Link} to="/userIndex">
            User Index
          </Button>
          <Typography>{currentUser}</Typography>
          <Button
            component={Link}
            to="/signin"
            onClick={() => {
              if (currentUser) {
                setCurrentUser(null);
              }
            }}
          >
            {currentUser ? `Sign Out` : `Sign In`}
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
