import { BaseContainer, MenuContainer, SidebarContainer, Content  } from './styles';

import Sidebar from '../../common/Lessons/Sidebar';
import Profile from '../../common/Lessons/Profile';

import SwitchApplication from '../../common/SwitchApplication';

function LessonsPage() {
  return (
    <BaseContainer>
      <SidebarContainer>
        <Sidebar></Sidebar>
      </SidebarContainer>
      <Content>
        {/* <OrdersPage/> */}
      </Content>
      <MenuContainer>
        <Profile></Profile>
      </MenuContainer>
      <SwitchApplication></SwitchApplication>
    </BaseContainer>
  );
}

export default LessonsPage;
