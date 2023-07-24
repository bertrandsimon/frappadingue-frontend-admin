
import Header from './common/Header';
import EventAdd from './event/EventAdd';
import EventListing from './event/EventListing';
import UserListing from './user/UserListing';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <Header></Header>
      <div className={styles.container}>
        
        <UserListing></UserListing>
        <EventListing></EventListing>
        <EventAdd></EventAdd>
      </div>
        
       
      
      
    </div>
  );
}

export default Home;
