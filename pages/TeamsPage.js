import MainLayout from "../components/MainLayout";

import UserListing from "../components/user/UserListing";

function TeamsPage() {

  const componentToDisplayInRightPanel = <UserListing />
  
  return (
  <div>
    <h1>TEAMS PAGE</h1>
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel} itemSelected="Equipes"/>
  </div>

  );

}

export default TeamsPage;
