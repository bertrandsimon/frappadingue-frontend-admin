
import Image from 'next/image';

import MainLayout from './MainLayout';
import EventListing from './event/EventListing';
import UsersPage from '../pages/UsersPage';

function Home() {

  const componentToDisplayInRightPanel = <UsersPage />
  return (


  <>
  <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel}/>
  </>

    
  );
}

export default Home;
