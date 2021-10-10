import{ BsFillBarChartFill } from 'react-icons/bs';
import{ FaMoneyCheckAlt, FaMapMarkerAlt } from 'react-icons/fa';
import{ AiFillAppstore } from 'react-icons/ai';

import { Wrapper, Container, ListContainer } from './styles';

import MenuItem from './MenuItem';
import NavigationButton from './NavigationButton';

import { useApplication } from '../../../../hooks/app-hook';

function Siderbar({ props }) {

  const { page, changePage , switchApp } = useApplication();

  const items = [
    {
      name: 'Lessons',
      icon: <AiFillAppstore />,
      active: false,
      onClick: () => {
        switchApp();
      }
    },
    {
      name: 'Billings',
      icon: <BsFillBarChartFill />,
      active: page === '/' || page === '/billings',
      onClick: () => {
        changePage('/billings');
      }
    },
    {
      name: 'Orders',
      icon: <FaMoneyCheckAlt />,
      active: page === '/orders',
      onClick: () => {
        changePage('/orders');
      }
    },
    {
      name: 'Map',
      icon: <FaMapMarkerAlt />,
      active: page === '/map',
    },    
  ]
  return (
    <Wrapper>
      <Container>
        <NavigationButton />
        <ListContainer>
          {
            items.map(item => <MenuItem key={item} item={item} 
            onClick={item?.onClick}/>)
          }
        </ListContainer>
      </Container>
    </Wrapper>
  );
}

export default Siderbar;
