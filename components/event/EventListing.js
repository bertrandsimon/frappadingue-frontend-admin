import styles from '../../styles/EventListing.module.css';

import { useState, useEffect } from 'react';

import { Dialog, DialogContent } from '@mui/material';

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
import ModeIcon from '@mui/icons-material/Mode';

import EventAdd from './EventAdd';

function EventListing() {

  const handleAddEventSuccess = () => {
    // Close the modal after successful event creation
    setOpen(false);

    // Refresh eventsData by fetching updated data
    fetch('https://frappadingue-backend.vercel.app/events/allEvents')
      .then(response => response.json())
      .then(data => {
        setEventsData(data.all);
      });
  };

const [open, setOpen] = useState(false);

const [openConfirmDelete, setopenConfirmDelete] = useState(false);
const [idToDelete, setIdToDelete] = useState(null);

const handleOpenDeleteConfirm = (boolean, id) => {
 
  setopenConfirmDelete(boolean);
  setIdToDelete(id);
}


const handleClose = () => {
  setOpen(false);
};

const handleCloseDeleteModal = () => {
  setopenConfirmDelete(false);
};


const handleOpenAddEventModal = (id) => {
 
    setOpen(true);

}

const [eventsData, setEventsData] = useState([]);

useEffect(() => {
  fetch('https://frappadingue-backend.vercel.app/events/allEvents')
  .then(response => response.json())
  .then(data => {
    setEventsData(data.all)
  })
}, []);

useEffect(() => {
  //console.log('eventsData:', eventsData);
}, [eventsData]);


const handleDelete = (id) => {
  
  fetch(`https://frappadingue-backend.vercel.app/events/delete/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      
      setEventsData(prevEvents => prevEvents.filter(event => event._id !== id));
      setopenConfirmDelete(false);
    })
    .catch(error => {
      console.error('Error deleting event:', error);
    });
};
  return (
    <div className={styles.container}>
      <h1>Listing courses</h1>

      <Button variant="contained" onClick={() => handleOpenAddEventModal()}>AJOUTER UNE COURSE</Button>


      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
      

        <TableHead>
          <TableRow>
            <TableCell>NOM</TableCell>
            <TableCell align="center">EMPLACEMENT</TableCell>
            <TableCell align="center">MODIFIER</TableCell>
            <TableCell align="center">SUPPRIMER</TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          {eventsData.map((event) => (
            <TableRow
              key={event.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='up' style={{ fontWeight: 'bold' }}>
                {event.name}
              </TableCell>
            
              <TableCell align="center" >  {event.location}</TableCell>
              <TableCell align="center">
                <IconButton style={{ color: 'green' }} aria-label="Modifier">
                    <ModeIcon/>
                </IconButton>
              </TableCell>
              <TableCell align="center"> 
                <IconButton style={{ color: 'red' }} aria-label="Supprimer" onClick ={ () => handleOpenDeleteConfirm(true, event._id) }>
                  <DeleteForeverIcon/>
                </IconButton>
                </TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    {/* Modal new event */}
    <Dialog open={open} onClose={handleClose} maxWidth="xl">
      
      <DialogContent>

        <EventAdd onAddEventSuccess={handleAddEventSuccess}></EventAdd>

      </DialogContent>

    </Dialog>

    {/* modal confirm delete */}
    <Dialog open={openConfirmDelete} onClose={handleClose} maxWidth="xl">
      
      <DialogContent className='flex items-center justify-center'>
        <div className='p-4'><Button onClick ={ () => handleDelete(idToDelete)} variant="outlined" color="error" size="small" > Surpprimer la course ? </Button></div>
        <div className='p-4'><Button onClick={ ()=> handleCloseDeleteModal()} variant="outlined" size="small" > Annuler </Button> </div>
      
      </DialogContent>

    </Dialog>

    </div>
  );

}

export default EventListing;
