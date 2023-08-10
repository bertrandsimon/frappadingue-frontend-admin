import MainLayout from "../components/MainLayout";
import UserListing from "../components/user/UserListing";

function UsersPage() {

  const componentToDisplayInRightPanel = <UserListing />
  
  return (
  <div>
  
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel} itemSelected="Clients"/>
  </div>

  );

}

export default UsersPage;
