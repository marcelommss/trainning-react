import DashboardView from '../../views/BillingsDashboard';

import { BillingsProvider } from '../../../hooks/billing-dashboard-hook';

import { Container, Title } from './styles';

function BillingsPage() {
  return (
    <Container>
      <Title>Orders</Title>
      <BillingsProvider>
        <DashboardView />
      </BillingsProvider>
    </Container>
  );
}

export default BillingsPage;
