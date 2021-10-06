import { useEffect } from 'react';
import { Container, Wrapper } from './styles';

import { useBillings } from '../../../../hooks/billings-hook';

import Card from './Card';

function Cards() {
  
  const { dashboardState, dashboardDispatch } = useBillings();

  useEffect(() => {
    console.log(dashboardState.cards);
  }, [dashboardState.cards])

  return (
      <Wrapper>
        <Container>
          {dashboardState.cards && dashboardState.cards.map(card => 
          <Card info={{
            Name: card.name,
            SalesTotal: card.salesTotal,
            IncomesTotal: card.incomesTotal
          }} Share="25.7%" active={true}></Card>)}
          
        </Container>
      </Wrapper>
  );
}

export default Cards;
