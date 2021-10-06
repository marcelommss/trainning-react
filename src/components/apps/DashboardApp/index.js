import { BaseContainer, MenuContainer, SidebarContainer, Content  } from './styles';

import Sidebar from './Sidebar';
import SidePanel from '../../common/Billings/SidePanel';

import BillingsPage from '../../pages/BillingsPage';

import { ProductsProvider } from '../../../hooks/products-hook';

function App() {
  return (
    <BaseContainer>
      <SidebarContainer>
        <Sidebar></Sidebar>
      </SidebarContainer>
      <Content>
        <BillingsPage/>
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
