// STATES IMPORT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



// IMAGE IMPORT
import Image from 'next/image';

import { hideArticle } from '../reducers/hiddenArticles';

import Header from './common/Header';
import EventAdd from './event/EventAdd';
import EventListing from './event/EventListing';
import UserListing from './user/UserListing';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      
      <div className={styles.container}>
        <Header></Header>
        <UserListing></UserListing>
        <EventListing></EventListing>
        <EventAdd></EventAdd>
      </div>
        
       
      
      
    </div>
  );
}

export default Home;
