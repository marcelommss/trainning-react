import { Container, MenuItem } from './styles';

import { useBillings } from '../../../../hooks/billings-hook';

function Sidebar() {
  
  const { dashboardState, dashboardDispatch } = useBillings();

  const switchNavigation = (menu) => {    
    dashboardDispatch({
      type: "CHANGE_FILTER",
      payload: menu
    });
  }
  
  return (
      <Container>
        <MenuItem  active={dashboardState.navigationFilter === 'SALES'}onClick={() => switchNavigation("SALES")}>Sales</MenuItem>
        <MenuItem  active={dashboardState.navigationFilter === 'INCOMES'}onClick={() => switchNavigation("INCOMES")}>Incomes</MenuItem>
        <MenuItem  active={dashboardState.navigationFilter === 'BOTH'}onClick={() => switchNavigation("BOTH")}>Both</MenuItem>
      </Container>
  );
}

export default Sidebar;
