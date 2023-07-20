import styles from '../../styles/Footer.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';




function Footer() {
  return (
    <div>
      <h1 className={styles.title}>Footer</h1>
    </div>
  );
}

export default Footer;
