import styled from 'styled-components';

export const BaseContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: row;
  background: #313139;
  overflow: hidden;
`;

export const SidebarContainer = styled.div`
  width: 9rem;
`;


export const MenuContainer = styled.div`
  background-color: #1e1e26;
  width: 23vw;
  max-width: 420px;
`;

export const Content = styled.div`
  margin: 2.5rem 0 2.5rem 0;
  flex: 1;
  background: #171721;
`;  