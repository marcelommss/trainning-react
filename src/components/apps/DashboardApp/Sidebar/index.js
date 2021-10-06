import{ BsFillBarChartFill } from 'react-icons/bs';
import{ FcMoneyTransfer } from 'react-icons/fc';
import{ FaMapMarkerAlt } from 'react-icons/fa';
import{ AiFillAppstore } from 'react-icons/ai';


import { Wrapper, Container, ListContainer } from './styles';

import MenuItem from './MenuItem';
import NavigationButton from './NavigationButton';

import { useApplication } from '../../../../hooks/app-hook';

function Siderbar() {

  const { application, switchApp } = useApplication();

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
      active: true
    },
    {
      name: 'Orders',
      icon: <FcMoneyTransfer />,
      active: false
    },
    {
      name: 'Map',
      icon: <FaMapMarkerAlt />,
      active: false
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
