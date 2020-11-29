import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import MaterialTable from 'material-table';
import { Container } from '@material-ui/core';
import tableIcons from '../utilities/tableIcons';
import Details from '@material-ui/icons/Details';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/DeleteOutline';
import AddBox from '@material-ui/icons/AddBox';
import { connect } from 'react-redux';
import { deleteUserStart } from '../redux/index/indexActions';
import { selectIndexList } from '../redux/index/indexSelectors';
import { fetchIndexStart } from '../redux/index/indexActions';

const UserIndexPage = ({ indexList, deleteUserStart, history, match, fetchIndexStart }) => {
  useEffect(() => {
    fetchIndexStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!localStorage.getItem('skandToken')) return <Redirect to="/signin" />;

  return (
    <Container maxWidth="md">
      <MaterialTable
        title="User Index"
        columns={[
          { title: 'ID', field: 'id', filtering: false, sorting: true, defaultSort: 'asc' },
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
        }}
        icons={tableIcons}
        actions={[
          {
            icon: () => <AddBox fontSize="large" />,
            tooltip: 'Add New User',
            // This makes add button to appear in table toolbar instead for each row
            isFreeAction: true,
            onClick: (event, rowData) => {
              history.push(`${match.path}/edit/new`);
            },
          },

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
              deleteUserStart(rowData);
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
  fetchIndexStart: () => dispatch(fetchIndexStart()),
  deleteUserStart: (user) => dispatch(deleteUserStart(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserIndexPage));
