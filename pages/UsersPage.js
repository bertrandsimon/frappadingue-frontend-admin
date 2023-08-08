import MainLayout from "../components/MainLayout";
import UserListing from "../components/user/UserListing";

function UsersPage() {

  const componentToDisplayInRightPanel = <UserListing />
  
  return (
  <div>
    <h1>USERS PAGE</h1>
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel}/>
  </div>

  );

}

export default UsersPage;
