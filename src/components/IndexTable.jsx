import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import { Button, Container } from '@material-ui/core';
import tableIcons from '../utilities/tableIcons';
import Details from '@material-ui/icons/Details';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/DeleteOutline';
import { connect } from 'react-redux';
import { setIndexList } from '../redux/index/indexActions';

const sample = {
  data: [
    {
      id: '5f07599680b803abb0997c15',
      email: 'test1@skand.io',

      jobs_count: 1,
      active: true,
    },
    {
      id: '5f27e597364664a7f3770f92',
      email: 'random@gmail.com',

      jobs_count: 12,
      active: true,
    },
    {
      id: '5f27e588ef01b4a7d615c377',
      email: 'size@skand.io',

      jobs_count: 30,
      active: false,
    },
  ],
};

const IndexTable = ({ index, setIndexList }) => {
  useEffect(() => {
    setIndexList(sample.data);
  }, []);
  return (
    <Container maxWidth="md">
      <MaterialTable
        components={{
          Toolbar: (props) => (
            <Button color="primary" variant="contained">
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
        data={sample.data}
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
              // Do save operation
            },
          },
          {
            icon: () => <Edit />,
            tooltip: 'Edit',
            onClick: (event, rowData) => {
              // Do save operation
            },
          },
          {
            icon: () => <Delete />,
            tooltip: 'Delete',
            onClick: (event, rowData) => {
              // Do save operation
            },
          },
        ]}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  indexList: state.index.list,
});

const mapDispatchToProps = (dispatch) => ({
  setIndexList: (list) => dispatch(setIndexList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexTable);
