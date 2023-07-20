import styles from '../../styles/Arguments.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import ArgumentCard from './ArgumentCard';


function Arguments() {
  return (
    <div className={styles.container}>
      <ArgumentCard/>
      <ArgumentCard/>
      <ArgumentCard/>
      <ArgumentCard/>
      <ArgumentCard/>
      <ArgumentCard/>
   
      
     
    </div>
  //   <div className={styles.container}>
  //     <div>lorem dqshkd hqsk dhqskjqhs jkdhjkqhd sqkjhdsqjkhds jkqhds kjh</div>
  //     <div>lorem dqshkd hqsk dhqskjqhs jkdhjkqhd sqkjhdsqjkhds jkqhds kjh</div>
  //     <div>lorem dqshkd hqsk dhqskjqhs jkdhjkqhd sqkjhdsqjkhds jkqhds kjh</div>
  //     <div>lorem dqshkd hqsk dhqskjqhs jkdhjkqhd sqkjhdsqjkhds jkqhds kjh</div>

     
    
  //  </div>
   
  );
}

export default Arguments;
