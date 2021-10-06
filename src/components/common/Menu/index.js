import { Wrapper, Container, ListContainer } from './styles';

import MenuItems from '../../../data/menu-data.json';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <Wrapper>
      <Container>
        <MenuHeader></MenuHeader>
        <ListContainer>
          {
            MenuItems.map(item => <MenuItem key={item} label={item} active={item === 'ROE'  } />)
          }
        </ListContainer>
      </Container>
    </Wrapper>
  );
}

export default Menu;
