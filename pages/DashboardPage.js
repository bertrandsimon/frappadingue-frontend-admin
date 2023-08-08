import MainLayout from "../components/MainLayout";

import UserListing from "../components/user/UserListing";

function DashboardPage() {

  const componentToDisplayInRightPanel = <UserListing />
  
  return (
  <div>
    
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel}/>
    <h1>DASHBOARD PAGE</h1>
  </div>

  );

}

export default DashboardPage;
