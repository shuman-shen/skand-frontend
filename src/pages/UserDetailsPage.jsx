import { Card, CardContent, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';

import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { selectIndexItem } from '../redux/index/indexSelectors';

const UserDetailsPage = ({ userDetails }) => {
  if (!userDetails) return <Redirect to="/404" />;

  const { id, email, first_name, last_name, jobs_count, slack_username } = userDetails;
  return (
    <Card>
      <CardContent>
        <div>
          <AccountCircle />
          <Typography>{`User ID: ${id}`}</Typography>
        </div>
        <Typography>{`Name: ${first_name} ${last_name}`}</Typography>
        <Typography>{`Email: ${email}`}</Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userDetails: selectIndexItem(ownProps.match.params.id)(state),
});
export default connect(mapStateToProps)(withRouter(UserDetailsPage));
