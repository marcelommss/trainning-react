import { Container, MenuItem } from './styles';

import { useOrders } from '../../../../hooks/orders-hook';

function Sidebar() {
  
  const { dashboardState, dashboardDispatch } = useOrders();

  const switchNavigation = (menu) => {    
    dashboardDispatch({
      type: "CHANGE_FILTER",
      payload: menu
    });
  }
  
  return (
      <Container>
        <MenuItem  active={dashboardState.navigationFilter === 'ALL'}onClick={() => switchNavigation("ALL")}>Sales</MenuItem>
      </Container>
  );
}

export default Sidebar;
