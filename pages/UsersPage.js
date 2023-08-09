import MainLayout from "../components/MainLayout";
import UserListing from "../components/user/UserListing";

function UsersPage() {

  const componentToDisplayInRightPanel = <UserListing />
  
  return (
  <div>
    <h1>USERS PAGE</h1>
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel} itemSelected="Clients"/>
  </div>

  );

}

export default UsersPage;
