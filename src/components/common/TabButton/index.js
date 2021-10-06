import React from 'react';
import styled, {css} from 'styled-components';

export const Container = styled.button`
  background: transparent;
  min-width: 5.2rem;
  padding: 0.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  /* margin:0 1rem; */
  height: 40px;

  border: none;

  ${props => props.active && css`
  border-bottom: 2px solid #aaddd8DD;`}
          
  
  background: transparent;
          
  color: white;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  font-size: 0.84rem;

  &:hover {
    opacity: 0.8;
  }

  input[type="button"]:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.9);
  }

  input[type="button"]:active {
  }
`;

const TabButton = ({ active, children, ...rest }) => {
  return (
    <Container type="button" active={active} {...rest}>
      {children}
    </Container>
  );
};

export default TabButton;
