import styles from '../../styles/UserListing.module.css';

import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';

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
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nom', width: 130 },
  { field: 'surname', headerName: 'Prénom', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
];

const rows = [
  { id: 1, name: 'Snow', surname: 'Jon', email: 35 },
  { id: 2, name: 'Lannister', surname: 'Cersei', email: 42 },
  { id: 3, name: 'Lannister', surname: 'Jaime', email: 45 },
  { id: 4, name: 'Stark', surname: 'Arya', email: 16 },
  { id: 5, name: 'Targaryen', surname: 'Daenerys', email: null },
  { id: 6, name: 'Melisandre', surname: null, email: 150 },
  { id: 7, name: 'Clifford', surname: 'Ferrara', email: 44 },
  { id: 8, name: 'Frances', surname: 'Rossini', email: 36 },
  { id: 9, name: 'Roxie', surname: 'Harvey', email: 65 },
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
  console.log('usersData:', usersData);
}, [usersData]);


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
      />

    
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
      

        <TableHead>
          <TableRow>
            <TableCell>NOM</TableCell>
            <TableCell align="center">PRENOM</TableCell>
            <TableCell align="center">EMAIL</TableCell>
            <TableCell align="center">VOIR LA FICHE</TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          {usersData.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='up'>{user.name}</TableCell>
              <TableCell align="center" >  {user.surname}</TableCell>
              <TableCell align="center" >  {user.email}</TableCell>

           

              <TableCell align="center"> 
                <IconButton style={{ color: 'white' }} aria-label="Voir">
                  <PreviewIcon/>
                </IconButton>
                </TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );

}

export default UserListing;
