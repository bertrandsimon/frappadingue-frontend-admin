import styles from '../../styles/SingleUser.module.css';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SingleUser(props) {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fiche client</h1>
      
      <Stack direction="row" spacing={3}>
        <Item style={{ fontWeight: 'bold' }}>{props.user.name}</Item>
        <Item>{props.user.surname}</Item>
        
      </Stack>

      <Stack direction="row" spacing={3}>
        <Item>{props.user.email}</Item>
      </Stack>

  

      <div>{props.user.email}</div>
      
      <div>{props.user.address}</div>

      <div>
      <span>{props.user.zip_code}</span>
      <span>{props.user.city}</span>
      </div>
     
      <div>
        <span>{props.user.team_name}</span>
      </div>
      
     
      

    </div>
  );
}

export default SingleUser;
