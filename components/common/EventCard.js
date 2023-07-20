import styles from '../../styles/EventCard.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';




function EventCard() {
  return (
    <div>
      <h1 className={styles.title}>EventCard</h1>
    </div>
  );
}

export default EventCard;
