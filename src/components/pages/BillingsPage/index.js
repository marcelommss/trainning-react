import DashboardView from '../../views/BillingsDashboard';

import { BillingsProvider } from '../../../hooks/billings-hook';

import { Container, Title, } from './styles';

function BillingsPage() {
  return (
    <Container>
      <Title>Billings</Title>
      <BillingsProvider>
        <DashboardView />
      </BillingsProvider>
    </Container>
  );
}

export default BillingsPage;
