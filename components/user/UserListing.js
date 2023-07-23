import styles from '../../styles/UserListing.module.css';

import { useState, useEffect } from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PreviewIcon from '@mui/icons-material/Preview';

function UserListing() {

const [usersData, setUsersData] = useState([]);

const columns = [
  { field: 'id', headerName: 'ID', width: 300 },
  { field: 'name', headerName: 'Nom', width: 200 },
  { field: 'surname', headerName: 'Prénom', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  {
    field: 'voir_la_fiche',
    headerName: 'Voir la fiche',
    width: 300,
    renderCell: (params) => {
      return (
        <IconButton color="primary" aria-label="Voir" onClick={() => handlePreview(params.row.id)}>
          <PreviewIcon />
        </IconButton>
      );
    },
  },
];



useEffect(() => {
  fetch('http://localhost:3000/users/allUsers')
    .then(response => response.json())
    .then(data => {
      // Map the data to rename _id to id for DataGrid
      const transformedData = data.all.map(user => ({ ...user, id: user._id }));
      setUsersData(transformedData);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}, []);

useEffect(() => {
  //console.log('usersData:', usersData);
}, [usersData]);

const handlePreview = (id) => {console.log('row ID : ', id)}

const handleDelete = (id) => {
  console.log(id)
  fetch(`http://localhost:3000/events/delete/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns the updated events list after deletion
      console.log('DELETED')
      setEventsData(prevEvents => prevEvents.filter(event => event._id !== id));
    })
    .catch(error => {
      console.error('Error deleting event:', error);
    });
};
  return (
    <div className={styles.container}>
      <h1>Listing users</h1>

      <DataGrid
        rows={usersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        style={{ width: '100%' }}
        slots={{
          toolbar: GridToolbar,
        }}
      />
      
    </div>
  );

}

export default UserListing;
