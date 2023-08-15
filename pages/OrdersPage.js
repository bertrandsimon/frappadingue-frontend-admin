import MainLayout from "../components/MainLayout";

import UserListing from "../components/user/UserListing";

function OrdersPage() {

  const componentToDisplayInRightPanel = <UserListing />
  
  return (
  <div>
   
    <MainLayout componentToDisplayInRightPanel={componentToDisplayInRightPanel} itemSelected="Commandes"/>
  </div>

  );

}

export default OrdersPage;
