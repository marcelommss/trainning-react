import PeriodFilters from './PeriodFilters';
import Cards from './Cards';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

import { Container, Content } from './styles';

function OrdersDashboard() {

  return (
    <Container>
      <PeriodFilters/>
      <Content>
        <Sidebar />
        <Dashboard/>
      </Content>
      <Cards/>
    </Container>
  );
}

export default OrdersDashboard;
