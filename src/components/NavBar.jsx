import React from 'react';
import { AppBar, Box, Button, LinearProgress, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { signOutStart } from '../redux/user/userActions';
import { Link, withRouter } from 'react-router-dom';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { selectIsLoading } from '../redux/index/indexSelectors';
import { NavToolbar, UserText } from '../styles/navStyles';

const NavBar = ({ currentUser, isLoading, signOutStart, history }) => {
  return (
    <>
      <AppBar>
        <NavToolbar>
          <Box>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              component={Link}
              to="/userIndex"
            >
              User Index
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              component={Link}
              to="/signin"
              onClick={() => {
                signOutStart();
              }}
            >
              {currentUser ? `Sign Out` : `Sign In`}
            </Button>
          </Box>

          <UserText>{currentUser}</UserText>
        </NavToolbar>
      </AppBar>
      <Toolbar />
      <LinearProgress color="secondary" hidden={!isLoading} />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  isLoading: selectIsLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  //setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
