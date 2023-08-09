import MainLayout from "../components/MainLayout";

import UserListing from "../components/user/UserListing";
import EventListing from "../components/event/EventListing";

function EventsPage() {

  const componentToDisplayInRightPanel = <EventListing />
  
  return (
  <div>
    <h1>EVENTS PAGE</h1>
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel} itemSelected="Courses"/>
  </div>

  );

}

export default EventsPage;
