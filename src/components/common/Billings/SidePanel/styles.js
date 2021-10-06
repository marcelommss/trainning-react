import styled from 'styled-components';


export const Wrapper = styled.div`
  padding: 2.5rem 2.5rem 2.5rem 0;
  flex:1;
  height:100%;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background: #14141c;
  border-radius: 0 2.5rem 2.5rem 0;
  overflow: hidden;
  font-size: 0.8rem;
  padding-top: 3vh;

`;

export const ListContainer = styled.ul`
  flex: 1;
  height: 100%;
  width: 100%;
  background: #14141c;
  border-radius: 0 2.5rem 2.5rem 0;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Line = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  svg{
    font-size: 1.2rem;
    color: #FFFFFF88;
    min-width: 1rem;
    top: 0;
  }
`;

export const Products = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  
  text-align: left;

  h2 {
    padding-left: 1vw;
    font-size: 0.9rem;
    color: white;
  }
  
  h3 {
    padding-left: 1vw;
    color: #FFFFFF77;
    letter-spacing: 0.5px;
    font-weight: 300;
    font-size: 0.8rem;
    line-height: 1.5rem;
  }

  ul{
    width: 100%;
    padding: 0;
    max-height: 51vh;

    overflow-y: scroll;
    
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius:10px;
  } 
  &::-webkit-scrollbar-thumb {
    background-color: #FFFFFF44;
    border-radius:10px;
  } 

  &::-webkit-scrollbar-button {
    background-color: transparent;
    display: none;
  } 

  &::-webkit-scrollbar-corner {
   background-color: transparent;
  }  

    li{
      margin-bottom: 1.4rem;
      height: 3rem;
      display: flex;
      flex-direction: row;
      padding: 4px 8px 8px 8px;

      .colorColumn{
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 50px;
      }
      .dataColumn{
          display: flex;
          flex: 1;
          flex-direction: column;
        .title{
          color: #FFFFFFDD;
          font-size: 0.7rem;
          letter-spacing: 0.1px;

        }
      }
    }
  }

`;


export const Chips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-top: 1vh;
  padding-bottom: 2vh;
`;

export const Chip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 35%;
  height: 80%;
  background: #FFFFFF11;
  border-radius: 1rem;

  &.active{flex: 1 0;
  width: 7rem;
  background: #a8ddd8;
  }
`;



