import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 7.4rem;
  height: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
`;


export const MenuItem = styled.button`
  background: transparent;
  border: none;
  font-size: 0.95rem;
  padding: 0;
  height: 2.8rem;
  width: 100%;
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: left;

  margin-left: -2rem;
  
  padding-left: 1.7rem;

  color: #FFFFFF88;

  letter-spacing: 0.7px;

  ${props => props.active && css`
    background: #FFFFFF18;
    border-radius:1.3rem;
  `}
          
  &:hover{
    color: #FFFFFFAA;
  }
`;