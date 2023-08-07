import styles from '../../styles/EventAdd.module.css';

import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/fr';


function EventAdd() {
  const todayDate = new Date();
  const [formData, setFormdata] = useState({
    name:'',
    location:'',
    date: '',
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


  console.log(formData);

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

  const handleDateChange = (selectedDate) => {
    // Convert Day.js object to string before setting in formData
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    setFormdata({ ...formData, date: formattedDate });
  };

  return (
  // <div className={styles.container}>
      <div >
    <h1>EventAdd</h1>

    <TextField
          required
          id="outlined-required"
          label="Nom de la course"
          defaultValue=""
          onChange={(e) => setFormdata( {...formData, name : e.target.value} )} value={name}
          // helperText="Incorrect entry."
        />

    <TextField
              required
              id="outlined-required"
              label="Ville"
              defaultValue=""
              onChange={(e) => setFormdata( {...formData, location : e.target.value} )} value={location}
            />

   
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
      <DatePicker 
      id="outlined-required"
      label="Date de la course"
      value={date} // Important: Use the formData.date value here to show the selected date
      onChange={handleDateChange} 
      
      />
    </LocalizationProvider>
      
    {/* <DateField
              required
              id="outlined-required"
              label="Date de la course"
              defaultValue=""
              onChange={(e) => setFormdata( {...formData, date : e.target.value} )} value={date}
            /> */}

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
