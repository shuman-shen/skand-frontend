import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import MaterialTable from 'material-table';
import { Button, Container } from '@material-ui/core';
import tableIcons from '../utilities/tableIcons';
import Details from '@material-ui/icons/Details';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux';
import { deleteUser, setIndexList } from '../redux/index/indexActions';
import { selectIndexList } from '../redux/index/indexSelectors';

const UserIndexPage = ({ indexList, deleteUser, history, match, setIndexList }) => {
  useEffect(() => {
    fetch('/api/v2/users', {
      method: 'get',
      headers: {
        authorization: localStorage.getItem('skandToken'),
      },
    }).then((res) => {
      if (res.ok) {
        const result = JSON.parse(res._bodyText);
        console.log(result);
        console.log(result.users);
        setIndexList(result.users);
      } else if (res.status === 401) {
        console.log(res);
      } else {
      }
    });
  }, []);
  return (
    <Container maxWidth="md">
      <MaterialTable
        components={{
          Toolbar: (props) => (
            <Button
              color="primary"
              variant="contained"
              component={Link}
              to={`${match.path}/edit/new`}
            >
              Add New
            </Button>
          ),
        }}
        columns={[
          { title: 'ID', field: 'id', filtering: false },
          { title: 'Email', field: 'email' },
          { title: 'Jobs Count', field: 'jobs_count', type: 'numeric', filtering: false },
          {
            title: 'Active',
            field: 'active',
            type: 'boolean',
          },
        ]}
        data={indexList}
        options={{
          filtering: true,
          search: false,
          actionsColumnIndex: -1,
          showTitle: false,
        }}
        icons={tableIcons}
        actions={[
          {
            icon: () => <Details />,
            tooltip: 'View Details',
            onClick: (event, rowData) => {
              history.push(`${match.path}/view/${rowData.id}`);
            },
          },
          {
            icon: () => <Edit />,
            tooltip: 'Edit',
            onClick: (event, rowData) => {
              history.push(`${match.path}/edit/${rowData.id}`);
            },
          },
          {
            icon: () => <Delete />,
            tooltip: 'Delete',
            onClick: (event, rowData) => {
              deleteUser(rowData);
            },
          },
        ]}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  indexList: selectIndexList(state),
});

const mapDispatchToProps = (dispatch) => ({
  setIndexList: (list) => dispatch(setIndexList(list)),
  deleteUser: (user) => dispatch(deleteUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserIndexPage));
