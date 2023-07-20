import styles from '../../styles/UserZone.module.css';
import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import SignIn from './SignIn';
import SignUp from './SignUp';

function UserZone() {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className={styles.container}>
      <IconButton style={{ color: 'white' }} aria-label="Panier" >
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton style={{ color: 'white' }} aria-label="Connexion" onClick={handleClickOpen}>
        <PersonIcon/>
      </IconButton>

      <Dialog open={open} onClose={handleClose} >
      
        <DialogContent className={styles.modalBg}>

          <SignUp></SignUp>
      
        </DialogContent>

      </Dialog>

    </div>
  );
}

export default UserZone;
