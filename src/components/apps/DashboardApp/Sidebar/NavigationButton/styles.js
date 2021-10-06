import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
  margin-top: 1.5vh;
  min-height: 5vh;
  margin-bottom: 1vh;
  height: 75px;
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
      color: #b0a8c3; 
    }
  }
`;
