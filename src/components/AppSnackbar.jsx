import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
  selectSnackbarMessage,
  selectSnackbarSeverity,
  selectSnackbarStatus,
} from '../redux/snackbar/snackbarSelectors';
import { closeSnackbar } from '../redux/snackbar/snackbarActions';
import { connect } from 'react-redux';

const AppSnackbar = ({ open, severity, message, closeSnackbar }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={closeSnackbar}>
      <MuiAlert onClose={closeSnackbar} severity={severity}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

const mapStateToProps = (state) => ({
  open: selectSnackbarStatus(state),
  severity: selectSnackbarSeverity(state),
  message: selectSnackbarMessage(state),
});
const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => dispatch(closeSnackbar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSnackbar);
