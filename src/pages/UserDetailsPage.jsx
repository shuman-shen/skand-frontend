import { Card, CardContent, Container } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';

import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import TextListItem from '../components/TextListItem';
import { selectIndexItem } from '../redux/index/indexSelectors';

const UserDetailsPage = ({ userDetails }) => {
  if (!userDetails) return <Redirect to="/userIndex" />;

  const { id, email, first_name, last_name, jobs_count, active, slack_username } = userDetails;
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <TextListItem Icon={AccountCircle} title="User ID" content={`${id}`} />

          <TextListItem title="Name" content={`${first_name} ${last_name}`} />
          <TextListItem title="Email" content={`${email}`} />
          <TextListItem title="Jobs Count" content={`${jobs_count}`} />
          <TextListItem title="Active" content={active ? `Yes` : `No`} />
          <TextListItem title="Slack Username" content={`${slack_username}`} />
        </CardContent>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  userDetails: selectIndexItem(ownProps.match.params.id)(state),
});

export default connect(mapStateToProps)(withRouter(UserDetailsPage));
