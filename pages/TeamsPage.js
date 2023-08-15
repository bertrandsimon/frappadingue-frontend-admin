import MainLayout from "../components/MainLayout";

import UserListing from "../components/user/UserListing";

function TeamsPage() {

  const componentToDisplayInRightPanel = <UserListing />
  
  return (
  <div>
    
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel} itemSelected="Equipes"/>
  </div>

  );

}

export default TeamsPage;
