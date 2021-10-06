import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
  margin-top: 2.5vh;
  height: 11vh;
  width:100%;
  color: white; 
  svg{
    font-size:2.15rem; 
  }
  h2{
    font-size:1.25rem;  
  }
  
  &:hover{
    svg{
      color: #a1abbf; 
    }
  }
`;
