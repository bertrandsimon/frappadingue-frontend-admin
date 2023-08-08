import styles from '../../styles/UserListing.module.css';

import { useState, useEffect } from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import SingleUser from './SingleUser';


import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';

function UserListing() {

const [usersData, setUsersData] = useState([]);
const [singleUserData, setSingleUserData] = useState([]);
const [open, setOpen] = useState(false);

const handleClose = () => {
  setOpen(false);
};

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
  fetch('https://frappadingue-backend.vercel.app/users/allUsers')
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

const handlePreview = (id) => {
  fetch(`https://frappadingue-backend.vercel.app/users/id/${id}`)
    .then(response => response.json())
    .then( data => setSingleUserData(data.user))
    setOpen(true);
    //console.log('row ID : ', id)
}

useEffect(() => {
  console.log('singleUserData:', singleUserData.name);
}, [singleUserData]);

const handleDelete = (id) => {
  console.log(id)
  fetch(`https://frappadingue-backend.vercel.app/events/delete/${id}`, {
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

    <Dialog open={open} onClose={handleClose} maxWidth="lg">
      
      <DialogContent>

        <SingleUser user={singleUserData}></SingleUser>

      </DialogContent>

    </Dialog>
      
    </div>
  );

}

export default UserListing;
