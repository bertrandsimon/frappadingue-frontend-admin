// STATES IMPORT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


// IMAGE IMPORT
import Image from 'next/image';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import { hideArticle } from '../reducers/hiddenArticles';

import Header from './common/Header';
import UserZone from './common/UserZone';
import SliderHome from './common/SliderHome';
import CardsArea from './common/CardsArea';
import EventCard from './common/EventCard';


import Editorial from './homepage/Editorial';
import Arguments from './common/Arguments';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.main}>
      
      <div className={styles.container}>
        <Header></Header>
        <SliderHome></SliderHome>
        <CardsArea></CardsArea>
        <Editorial></Editorial>
        <Arguments></Arguments>
      </div>
        
       
      
      
    </div>
  );
}

export default Home;
