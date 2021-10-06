import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  border-radius: 50% 50%;
  overflow: hidden;
  
`;

export default function Profile() {
  return <Container>
      <img src="https://avatars.githubusercontent.com/u/20825407?v=4" alt="" height="28"/>
    </Container>
}
