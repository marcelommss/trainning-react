import DashboardView from '../../views/OrdersDashboard';

import { OrdersProvider } from '../../../hooks/orders-hook';

import { Container, Title } from './styles';

function OrdersPage() {
  return (
    <Container>
      <Title>Orders</Title>
      <OrdersProvider>
        <DashboardView />
      </OrdersProvider>
    </Container>
  );
}

export default OrdersPage;
