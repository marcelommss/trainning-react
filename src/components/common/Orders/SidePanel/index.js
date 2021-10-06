import { useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { FaCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { Badge, Divider } from '@material-ui/core';
import { Mail, KeyboardArrowDown, SportsMma } from '@material-ui/icons';

import { Wrapper, Container,Header, Line, Products, Chips, Chip } from './styles';

import VerticalDivider from '../../../common/VerticalDivider';
import Profile from '../../../common/Profile';
import DoughnutChart from '../DoughnutChart';
import { useProducts } from '../../../../hooks/products-hook';

import roundAccurately from '../../../../utils/round';

function SidePanel() {

  const { productsState } = useProducts();

  useEffect(() => {
    console.log('product state have being updated', productsState);
  }, [productsState.products])

  return (
    <Wrapper>
      <Container>
        <Header>
          <Line>
            <FiSearch />
            <Badge color="secondary" variant="dot">
              <Mail />
            </Badge>
          </Line>
          <VerticalDivider></VerticalDivider>
          <Line>
            <Profile></Profile>
            <span>Marcelo</span>
            <KeyboardArrowDown></KeyboardArrowDown>
          </Line>
        </Header>
        <Products>
          <h2>Overall Progress</h2>
          <h3>Sales</h3>
          <DoughnutChart />
          <h2>Top Products</h2>
          <h3>Till October 2021</h3>
          <ul>
            {productsState?.products && productsState?.products.map((product, index) => 
              <li key={product.code}>
                <div className="colorColumn">
                  <FaCircle color={productsState.colors[index]} size={22}></FaCircle>
                </div>
                <div className="dataColumn">
                  <div className="title">{product.name}</div>
                  <div className="code">{product.code}</div>
                  <div className="totalValue">
            <NumberFormat value={roundAccurately(product.totalValue, 2)} 
                        displayType={'text'} prefix={'$ '}
                        thousandSeparator={'.'} 
                        decimalSeparator={','} /></div>
                  <div className="totalValue">
              <NumberFormat value={roundAccurately(product.totalVolume, 2)} 
                          displayType={'text'} suffix={product.totalVolume >= 0 ? ' sold volume' : ' return volume'}
                          thousandSeparator={'.'} 
                          decimalSeparator={','} /></div>
                </div>
              </li>
            )}
          </ul>
        </Products>
        <Chips>
          <Line >
            <Chip>
              <span className="ammount">2500</span>
              <span className="label">orders</span>
            </Chip>
            <Chip className="active">
              <span className="ammount">200</span>
              <span className="label">splits</span>               
            </Chip>
          </Line>
          <Line >
            <Chip>
              <span className="ammount">1200</span>
              <span className="label">pending</span>
            </Chip>
            <Chip>
              <span className="ammount">300</span>
              <span className="label">completed</span>
            </Chip>
          </Line>
        </Chips>
      </Container>
    </Wrapper>
  );
}

export default SidePanel;
