import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color:  #FFFFFFCC;
  font-size: 1.6rem;
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
