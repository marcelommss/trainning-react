import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
  height: 5vh;
  width:100%;
  color: white; 
  svg{
    font-size:1rem;  
  }
  h3{
    font-size:0.9rem;  
  }
  
  ${props => props.active && css`
    background-color: white;
    color: #6d5d91;
  `}

  &:hover{
    background-color: #00000036;
  }
`;
