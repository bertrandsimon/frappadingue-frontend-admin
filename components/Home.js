
import Header from './common/Header';
import EventAdd from './event/EventAdd';
import EventListing from './event/EventListing';
import UserListing from './user/UserListing';
import Footer from './common/Footer';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      <Header></Header>
      <div className={styles.container}>
        
        <UserListing></UserListing>
        <EventListing></EventListing>
        <EventAdd></EventAdd>
        <Footer></Footer>
      </div>
        
       
      
      
    </div>
  );
}

export default Home;
