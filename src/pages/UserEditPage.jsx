import React from 'react';
import { Typography } from '@material-ui/core';
import { Redirect, withRouter } from 'react-router-dom';
import UserEditForm from '../components/UserEditForm';
import { selectIndexItem } from '../redux/index/indexSelectors';
import { connect } from 'react-redux';

const UserEditPage = ({ match, userDetails }) => {
  const { id } = match.params;

  if (id === 'new') {
    return (
      <div>
        <Typography>Add New User</Typography>
        <UserEditForm />
      </div>
    );
  }
  if (!userDetails) return <Redirect to="/404" />;

  return (
    <div>
      <Typography>{`User ID: ${id}`}</Typography>
      <UserEditForm initialEntry={userDetails} isNew={false} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userDetails: selectIndexItem(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(withRouter(UserEditPage));
