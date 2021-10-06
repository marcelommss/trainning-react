import { BaseContainer, MenuContainer, Content  } from './styles';
import Menu from '../../common/Menu';

import SwitchApplication from '../../common/SwitchApplication';

function App() {
  return (
    <BaseContainer>
      <MenuContainer>
        <Menu></Menu>
      </MenuContainer>
      <Content>
      </Content>
      <SwitchApplication></SwitchApplication>
    </BaseContainer>
  );
}

export default App;
