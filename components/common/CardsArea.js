import styles from '../../styles/CardsArea.module.css';

// IMAGE IMPORT
import Image from 'next/image';

import Button from '@mui/material/Button';


function CardsArea() {
  return (
    <div className={styles.container}>
      <div className={styles.coursesTxt}>
          
        <h1>Les prochaines<br /><span className='yellow'>courses</span></h1>
        <Button variant="outlined" className='whiteBtn'>toutes les courses</Button>
       
      </div>

      <div className={styles.eventCard}>
        <Image src="/images/event1.png" width={270} height={346}/>
        <span className='yellow'>10 sept 2023</span>
        <h3 className='up'>beauvais (60)</h3>
        <span className='grey'>2 eme edition</span>
      </div>

      <div className={styles.eventCard}>
        <Image src="/images/event2.png" width={270} height={346}/>
        <span className='yellow'>10 sept 2023</span>
        <h3 className='up'>beauvais (60)</h3>
        <span className='grey'>2 eme edition</span>
      </div>

      <div className={styles.eventCard}>
        <Image src="/images/event3.png" width={270} height={346}/>
        <span className='yellow'>10 sept 2023</span>
        <h3 className='up'>beauvais (60)</h3>
        <span className='grey'>2 eme edition</span>
      </div>
     
    </div>
  );
}

export default CardsArea;
