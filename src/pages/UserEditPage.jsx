import React from 'react';
import { Container } from '@material-ui/core';
import { Redirect, withRouter } from 'react-router-dom';
import UserEditForm from '../components/UserEditForm';
import { selectIndexItem, selectIndexList } from '../redux/index/indexSelectors';
import { fetchIndexStart } from '../redux/index/indexActions';
import { connect } from 'react-redux';
import { FormHeading } from '../styles/formStyles';

const UserEditPage = ({ match, userDetails, fetchIndexStart, history }) => {
  const { id } = match.params;

  if (id === 'new') {
    return (
      <Container maxWidth="sm">
        <FormHeading variant="h5">Add New User</FormHeading>
        <UserEditForm />
      </Container>
    );
  }
  if (!userDetails) return <Redirect to="/userIndex" />;

  return (
    <Container maxWidth="sm">
      <FormHeading variant="h5">{`User ID: ${id}`}</FormHeading>
      <UserEditForm initialEntry={userDetails} isNew={false} />
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userDetails: selectIndexItem(ownProps.match.params.id)(state),
  indexList: selectIndexList(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchIndexStart: () => dispatch(fetchIndexStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserEditPage));
