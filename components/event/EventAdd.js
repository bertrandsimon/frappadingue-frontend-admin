import styles from '../../styles/EventAdd.module.css';

import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EventAdd() {

  const [formData, setFormdata] = useState({
    name:'',
    location:'',
    date:'',
    zip_code:'',
    start_hour:'',
    active: true,
    max_capacity:'',
    description:'',
    banner_img:'',
    price:'',
    year:'',
    thumb_image:''
  });

  const { name, location, date, zip_code, start_hour, active, max_capacity, description, banner_img, price, year, thumb_image } = formData;
  const isFormValid = name && location && date && zip_code && start_hour && active && max_capacity && description && banner_img && price && year && thumb_image;
  //console.log(formData);

  const handleSubmit = () => {
    fetch('http://localhost:3000/events/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location, date, zip_code, start_hour, active, max_capacity, description, banner_img, price, year, thumb_image }),
    }).then(response => response.json())
      .then(data => {
        //console.log(data)
      });
  
  };

  return (
    <div className={styles.container}>
    <h1>EventAdd</h1>

    <TextField
          required
          id="outlined-required"
          label="Nom"
          defaultValue=""
          onChange={(e) => setFormdata( {...formData, name : e.target.value} )} value={name}
        />

    <TextField
              required
              id="outlined-required"
              label="Ville"
              defaultValue=""
              onChange={(e) => setFormdata( {...formData, location : e.target.value} )} value={location}
            />

    <TextField
              required
              id="outlined-required"
              label="date"
              defaultValue=""
              onChange={(e) => setFormdata( {...formData, date : e.target.value} )} value={date}
            />

    <TextField
              required
              id="outlined-required"
              label="Code Postal"
              defaultValue=""
              onChange={(e) => setFormdata( {...formData, zip_code : e.target.value} )} value={zip_code}
            />

    <TextField
                  required
                  id="outlined-required"
                  label="Heure de début"
                  defaultValue=""
                  onChange={(e) => setFormdata( {...formData, start_hour : e.target.value} )} value={start_hour}
                />

    <TextField
                  required
                  id="outlined-required"
                  label="Capacité (nb inscriptions)"
                  defaultValue=""
                  onChange={(e) => setFormdata( {...formData, max_capacity : e.target.value} )} value={max_capacity}
                />

    <TextField
                  required
                  id="outlined-required"
                  label="Description"
                  defaultValue=""
                  onChange={(e) => setFormdata( {...formData, description : e.target.value} )} value={description}
                />

    <TextField
                  required
                  id="outlined-required"
                  label="Image bannière"
                  defaultValue=""
                  onChange={(e) => setFormdata( {...formData, banner_img : e.target.value} )} value={banner_img}
                />

    <TextField
                  required
                  id="outlined-required"
                  label="Prix"
                  defaultValue=""
                  onChange={(e) => setFormdata( {...formData, price : e.target.value} )} value={price}
                />

    <TextField
                  required
                  id="outlined-required"
                  label="Année"
                  defaultValue=""
                  onChange={(e) => setFormdata( {...formData, year : e.target.value} )} value={year}
                />

    <TextField
                  required
                  id="outlined-required"
                  label="Vignete course"
                  defaultValue=""
                  onChange={(e) => setFormdata( {...formData, thumb_image : e.target.value} )} value={thumb_image}
                />

    <Button variant="contained" href="#contained-buttons" onClick={ () => handleSubmit() } disabled={!isFormValid}>
      CREER COURSE
    </Button>

    </div>
  );
}

export default EventAdd;
