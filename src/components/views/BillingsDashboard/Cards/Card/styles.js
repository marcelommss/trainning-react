import styled, { css } from 'styled-components';

export const Container = styled.div`
  float: left;
  width: 14rem;
  min-width: 150px;
  height: 10.5rem;
  padding: 1rem;
  margin-top: 0;
  margin-right: 2.5rem;

  font-size: 0.8rem;

  background: #22222c;

  display: flex;
  flex-direction: column;
  border-radius: 1.2rem;

  box-shadow: 0.7rem 1rem 1.8rem #00000022;
    
  transition: 0.6s ease-in;
  &:hover{
    margin-top: 3vh;
    box-shadow: 1.2rem 1.1rem 1.4rem #000000AA;
    
  }
   
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;   
`;

export const Bottom = styled.div`
  padding-top: 0.4rem;
  flex: 1;
  display: flex;
  flex-direction: column;   
`;

export const SalesBar = styled.div`
  margin-top: 5px;
  height: 7px;
  border-radius: 10px;
  background: #FFFFFF22;
  width: 100%;
`;

export const IncomesBar = styled.div`
  height: 100%;
  width: ${props => props.percentage}%;
  border-radius: 10px;
  background: #4af466ba;
`;


export const Title = styled.h5`
  color:  #FFFFFFCC;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

export const Filters = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1.2px solid #ffffff22;
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  
  font-family: Roboto;

  color: white;

  svg{
    font-size: 1.2rem;
    color: #FFFFFF55;
    margin-right: 1rem;
  }

  span{
    font-size: 1.2rem;
    padding-top: 0.2px;
    color: #FFFFFF55;
  }
`;

export const PeriodsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: flex-end;
`;

export const ButtonContainer = styled.div`
  margin-right: 0.6rem;
`;


export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  svg{
    font-size: 1.2rem;
    margin-right: -0.4rem;
    color: #FFFFFF88;
    min-width: 1rem;
    top: 0;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;

  span{
    margin-left: 10px;
    margin-right: 1rem;
  }
  svg{
    font-size: 1rem;
    margin-right: -0.4rem;
    color: #FFFFFF55;
    min-width: 1rem;
    top: 0;
  }
`;


