// STATES IMPORT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



// IMAGE IMPORT
import Image from 'next/image';

import { hideArticle } from '../reducers/hiddenArticles';

import Header from './common/Header';


import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      
      <div className={styles.container}>
        <Header></Header>

      </div>
        
       
      
      
    </div>
  );
}

export default Home;
