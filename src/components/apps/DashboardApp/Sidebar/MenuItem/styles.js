import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
  height: 4rem;
  width:100%;
  color: white; 
  h3{
    font-size:0.9rem;  
  }
  ${props => props.active && css`
    .cirle{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #aaddd8;
    text-align: center;
    color:#171721;
      svg{
        color: #171721;
      }
    }
  `}

  &:hover{
    background-color: #00000036;
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  color: white; 
  svg{
    font-size:1.5rem;  
    color: white;
  }
`;
