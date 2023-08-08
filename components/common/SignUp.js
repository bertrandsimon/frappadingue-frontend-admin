import styles from '../../styles/SignUp.module.css';

import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function SignUp() {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const isFormValid = name && surname && email && password;

  const handleSubmit = () => {
    fetch('https://frappadingue-backend.vercel.app/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, surname, email, password }),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
      //dispatch( loggedStatus ()) 
      //dispatch( loggedName (data.name))
      //dispatch( loggedSurname (data.surname))
      //dispatch( loggedToken (data.token)) ;
      //setShowRegisterForm(true)
      });
  
    //console.log(name, surname, email, password);
  };
  
  //console.log(name, surname, email, password);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inscription</h1>
      <TextField
          required
          id="outlined-required"
          label="Nom"
          defaultValue=""
          onChange={(e) => setName(e.target.value)} value={name}
        />

      <TextField
          required
          id="outlined-required"
          label="Prénom"
          defaultValue=""
          onChange={(e) => setSurname(e.target.value)} value={surname}
        />

      <TextField
          required
          id="outlined-required"
          label="Email@email.com"
          defaultValue=""
          onChange={(e) => setEmail(e.target.value)} value={email}
        />

      <TextField
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete=""
          onChange={(e) => setPassword(e.target.value)} value={password}
        />


<Button variant="contained" href="#contained-buttons" onClick={ () => handleSubmit() } disabled={!isFormValid}>
  CREATION COMPTE
</Button>

    </div>
  );
}

export default SignUp;
