import MainLayout from "../components/MainLayout";

import UserListing from "../components/user/UserListing";
import EventListing from "../components/event/EventListing";

function EventsPage() {

  const componentToDisplayInRightPanel = <EventListing />
  
  return (
  <div>
 
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel} itemSelected="Courses"/>
  </div>

  );

}

export default EventsPage;
