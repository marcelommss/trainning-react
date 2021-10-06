import React from 'react';
import styled from 'styled-components';

import { useApplication } from '../../../hooks/app-hook';

import { BsToggleOn } from 'react-icons/bs';
import { BsToggleOff } from 'react-icons/bs';

export const Container = styled.button`
  position: absolute;
  top: 2vh;
  right:2vw;
  background: rgba(255, 255, 255, 0.03);
  border: none;

  border-left: 1.3px solid rgba(255, 255, 255, 0.2);
  border-right: 1.3px solid rgba(255, 255, 255, 0.2);
  border-top: 1.3px solid rgba(255, 255, 255, 0.2);

  border-bottom: 1.3px solid rgba(255, 255, 255, 0.2);
  min-width: 80px;
  height: 80px;
  padding: 0.2rem;
  border-radius:20%;
  /* color: var(--color-primary); */
  color: ${props => props.active ? '#544a85' : 'white'};
  font-family: Arimo, sans-serif;
  font-weight: 300;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;

  font-size: 0.84rem;

  svg>path{
    color: ${props => props.active ? '#544a85' : 'white'};
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  input[type="button"]:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.9);
  }

  input[type="button"]:active {
  color: blue;
  }
`;

export const ExpanderOption = styled.div`
  font-size: 28px;
  svg{
    font-size: 20px;
  }
  .help{
    padding-top: 4px;
    font-size: 26px;
    }
`;
const SwitchApplication = ({ active, children, ...rest }) => {
  
  const { application, switchApp } = useApplication();

  return (
    <Container type="button" active={application !== 'lessons'} {...rest} onClick={switchApp}>
      <ExpanderOption>
        {application === 'lessons' ? <BsToggleOff></BsToggleOff> : <BsToggleOn></BsToggleOn> }        
      </ExpanderOption>
    </Container>
  );
};

export default SwitchApplication;
