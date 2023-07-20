import styles from '../../styles/Header.module.css';

// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Menu from './Menu';
import UserZone from './UserZone';

function Header() {
  return (
    <div className={styles.container}>
      <div><Image src="/images/frappadingue-logo.png" width={216} height={77}/></div>
      <div><Menu/></div>
      <div><UserZone/></div>
    </div>
  );
}

export default Header;
