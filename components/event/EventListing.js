import styles from '../../styles/EventListing.module.css';

import { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EventListing() {

const [eventsData, setEventsData] = useState([{}]);

useEffect(() => {
  fetch('http://localhost:3000/events/allEvents')
  .then(response => response.json())
  .then(data => {
    setEventsData(data.all)
    console.log(data)
    console.log(data.all)
    //console.log('eventsData : ', eventsData)
  })
}, []);

useEffect(() => {
  console.log('eventsData:', eventsData);
}, [eventsData]);


  return (
    <div className={styles.container}>
      <h1>Events listing</h1>
    </div>
  );

}

export default EventListing;
