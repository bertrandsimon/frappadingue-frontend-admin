import styles from '../../styles/Menu.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>courses</div>
      <div> | </div>
      <div className={styles.item}>médias</div>
      <div> | </div>
      <div className={styles.item}>faq</div>
      <div> | </div>
      <div className={styles.item}>bénévoles</div>
      <div> | </div>
      <div className={styles.item}>contact</div>
    </div>
  );
}

export default Menu;
