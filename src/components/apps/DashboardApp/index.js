import { BaseContainer, MenuContainer, SidebarContainer, Content  } from './styles';

import {  Switch, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import SidePanel from '../../common/Billings/SidePanel';

import BillingsPage from '../../pages/BillingsPage';

import { ProductsProvider } from '../../../hooks/products-hook';
import OrdersPage from '../../pages/OrdersPage';

function App() {
  return (
    <BaseContainer>
      <SidebarContainer>
        <Sidebar></Sidebar>
      </SidebarContainer>
      <Content>
        <Switch>
          <Route exact path="/" component={() => <BillingsPage/>} />
          <Route exact path="/billings" component={() => <BillingsPage/>} />
          <Route exact path="/orders" component={() => <OrdersPage/>} />
        </Switch>
      </Content>
      <MenuContainer>
        <ProductsProvider>
          <SidePanel></SidePanel>
        </ProductsProvider>
      </MenuContainer>
    </BaseContainer>
  );
}

export default App;
