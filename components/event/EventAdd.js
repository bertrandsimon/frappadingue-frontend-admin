import styles from '../../styles/EventAdd.module.css';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router';

import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/fr';



function EventAdd( props ) {

  const router = useRouter(); 

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
    //banner_img:'https://www.frappadingue.net/wp-content/uploads/2016/03/course-a-obstacles-frappadingue-07-1024x683.jpg',
    price:'',
    year:'',
    thumb_image:'/images/event1.png',
    format_s_price: '',
    format_l_price: '',
    format_s_stripe_paylink: '',
    format_l_stripe_paylink: '',
  });



  const { name, location, date, zip_code, start_hour, active, max_capacity, description, year, thumb_image, format_s_price, format_l_price, format_s_stripe_paylink, format_l_stripe_paylink} = formData;
  const isFormValid = name && location && date && zip_code && start_hour && active && max_capacity && description && year && format_s_price && format_l_price && format_s_stripe_paylink && format_l_stripe_paylink;


 

  const handleSubmit = () => {
    fetch('http://localhost:3000/events/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location, date, zip_code, start_hour, active, max_capacity, description, year, thumb_image, format_s_price, format_l_price, format_s_stripe_paylink,format_l_stripe_paylink }),
    }).then(response => response.json())
      .then(data => {
        // Redirect to /EventsPage and force re-render
        
        props.onAddEventSuccess()
      });
  
  };

  const handleDateChange = (selectedDate) => {
    // Convert Day.js object to string before setting in formData
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    setFormdata({ ...formData, date: formattedDate });
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 ">

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3 ">
        

            <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-3">
              <div className="px-4 py-6 sm:p-8">
                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  
                  {/* ROW 1 */}
                  <div className="sm:col-span-3">
                 
                    <div className="mt-2">
                    <TextField
                      required
                      id="outlined-required"
                      label="Nom de la course"
                      defaultValue=""
                      onChange={(e) => setFormdata( {...formData, name : e.target.value} )} value={name}
                      fullWidth
                      size="small"
                      InputLabelProps={{ style: { fontSize: '14px' } }} 
                      // helperText="Incorrect entry."
                    />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                  
                    <div className="mt-2">
                    <TextField
                      required
                      id="outlined-required"
                      label="Ville"
                      defaultValue=""
                      onChange={(e) => setFormdata( {...formData, location : e.target.value} )} value={location}
                      fullWidth
                      size="small"
                      InputLabelProps={{ style: { fontSize: '14px' } }} 
                    />
                    </div>
                  </div>
                  {/* #ROW 1 */}
          
                  {/* ROW 2 */}
                  <div className="sm:col-span-3">
                   
                    <div className="mt-2">
                      <TextField
                        required
                        id="outlined-required"
                        label="Code Postal"
                        defaultValue=""
                        type="number"
                        onChange={(e) => setFormdata( {...formData, zip_code : e.target.value} )} value={zip_code}
                        fullWidth
                        size="small"
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                  
                    <div className="mt-2">
                      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                        <DatePicker 
                          id="outlined-required"
                          label="Date de la course"
                          value={date} // Important: Use the formData.date value here to show the selected date
                          onChange={handleDateChange} 
                     
                        />
                     </LocalizationProvider>
                    </div>
                  </div>
                  {/* #ROW 2 */}

                  {/* ROW 3 */}
                  <div className="sm:col-span-3">
                   
                    <div className="mt-2">
                      <TextField
                        required
                        id="outlined-required"
                        label="Heure de début (ex: 14 H 00)"
                        defaultValue=""
                        onChange={(e) => setFormdata( {...formData, start_hour : e.target.value} )} value={start_hour}
                        fullWidth
                        size="small"
                        InputLabelProps={{ style: { fontSize: '14px' } }} 
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                
                    <div className="mt-2">
                      <TextField
                        required
                        id="outlined-required"
                        label="Capacité (nb inscriptions)"
                        defaultValue=""
                        type="number"
                        onChange={(e) => setFormdata( {...formData, max_capacity : e.target.value} )} value={max_capacity}
                        fullWidth
                        size="small"
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                      />
                    </div>
                  </div>
                  {/* #ROW 3 */}
            
                  <div className="col-span-full">
                   
                    <div className="mt-2">
                    <TextField
                      required
                      multiline
                      rows={8}
                      id="outlined-required"
                      label="Description"
                      defaultValue=""
                      onChange={(e) => setFormdata( {...formData, description : e.target.value} )} value={description}
                      fullWidth
                      size="small"
                      InputLabelProps={{ style: { fontSize: '14px' } }}
                    />
                    </div>
                    
                  </div>
                
                {/* ROW 4 */}
                <div className="sm:col-span-3">
                 
                    <div className="mt-2">
                      <TextField
                        required
                        id="outlined-required"
                        label="Année"
                        defaultValue=""
                        type="number"
                        onChange={(e) => setFormdata( {...formData, year : e.target.value} )} value={year}
                        fullWidth
                        size="small"
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
              
                    <div className="mt-2">
                      
                    </div>
                  </div>
                  {/* #ROW 4 */}

                  {/* ROW 5 */}
                  <div className="sm:col-span-3">
                 
                    <div className="mt-2">
                      <TextField
                        required
                        id="outlined-required"
                        label="Prix format S"
                        defaultValue=""
                        type="number"
                        onChange={(e) => setFormdata( {...formData, format_s_price : e.target.value} )} value={format_s_price}
                        fullWidth
                        size="small"
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
              
                    <div className="mt-2">
                      <TextField
                        required
                        id="outlined-required"
                        label="Prix format L"
                        defaultValue=""
                        type="number"
                        onChange={(e) => setFormdata( {...formData, format_l_price : e.target.value} )} value={format_l_price}
                        fullWidth
                        size="small"
                        InputLabelProps={{ style: { fontSize: '14px' } }}
                      />
                    </div>
                  </div>

                  {/* #ROW 5 */}

                  {/* ROW 6 */}

                  <div className="sm:col-span-3">
                 
                 <div className="mt-2">
                   <TextField
                     required
                     id="outlined-required"
                     label="Lien paiement stripe format S"
                     defaultValue=""
                     onChange={(e) => setFormdata( {...formData, format_s_stripe_paylink : e.target.value} )} value={format_s_stripe_paylink}
                     fullWidth
                     size="small"
                     InputLabelProps={{ style: { fontSize: '14px' } }}
                   />
                 </div>
               </div>

               <div className="sm:col-span-3">
           
                 <div className="mt-2">
                   <TextField
                     required
                     id="outlined-required"
                     label="Lien paiement stripe format L"
                     defaultValue=""
                     onChange={(e) => setFormdata( {...formData, format_l_stripe_paylink : e.target.value} )} value={format_l_stripe_paylink}
                     fullWidth
                     size="small"
                     InputLabelProps={{ style: { fontSize: '14px' } }}
                   />
                 </div>
               </div>


                  {/* #ROW 6 */}


                </div>
              </div>
              <div className="flex items-center justify-center gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              
              <Button variant="contained" href="#contained-buttons" onClick={ () => handleSubmit() } disabled={!isFormValid}>
                CREER COURSE
              </Button>
              </div>
            </form>
          </div>

    
  </div>
  );
}

export default EventAdd;
