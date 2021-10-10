import React, { createContext, useCallback, useReducer, useEffect, useContext }  from 'react';
import { surname } from "react-lorem-ipsum";
import { format } from 'date-fns'

import api from '../services/api';

import { ordersReducer, orderInitialValue } from '../reducers/order-reducer';

const OrdersContext = createContext();

const OrdersProvider = ({ children }) => {
  
  const [dashboardState, dashboardDispatch] = useReducer(ordersReducer, orderInitialValue);
    
  useEffect(() => {
      dashboardDispatch({
        type: "SET_FILTER",
        payload: format(new Date(), 'MM/yyyy')
      });        
  },[]);
   
  useEffect(() => {
    loadScore();
    loadCards();
  },[dashboardState.filter, dashboardState.territory, dashboardState.navigationFilter, dashboardState.navigationPeriod]);
  
  const loadScore = useCallback(async () => {
    console.log(dashboardState);
      await api.post('api/Pedidos/OrdersScore', {
        'CodigoTerritorio': dashboardState.territory,
        'FilterType': dashboardState.navigationPeriod,
        'FilterValue': dashboardState.filter,
      }).then((res) => {

      var result = res.data;
      if(!result)
        return;

      var series = [];
      var periods = [];

      if(dashboardState.navigationFilter === 'ALL') {
        var salesSeries = 
        {
          data: [...result.sales.map(sale => sale.result)],
          type: 'bar',
          showBackground: false,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.06)'
          },
        };
        periods = [ ...result.sales.map(sale => sale.date) ];
        series = [...series, salesSeries];
      }

      dashboardDispatch({
        type: "LOAD_DATA",
        payload: { ...dashboardState.data,
            xAxis: {
              ...dashboardState.data.xAxis,
              data: [...periods]
            },
            series: [ ...series ]
          }
        });
        
      }).catch(async (err)=> {
        console.log('error loading orders score');
      });
      
  } , [dashboardState]);

  const loadCards = useCallback(async () => {
    console.log(dashboardState);
      await api.post('api/Rateios/TopCustomers', {
        'CodigoTerritorio': dashboardState.territory,
        'FilterType': dashboardState.navigationPeriod,
        'FilterValue': dashboardState.filter,
      }).then((res) => {

      var result = res.data;
      if(!result)
        return;

      if(process.env.REACT_APP_FAKE_DATA){
        result = [...result.map(item=> {
          return {
            name: surname(),
            incomesTotal: item.incomesTotal,
            salesTotal: item.salesTotal,
          };
          })];
      }

      dashboardDispatch({
        type: "SET_CARDS",
        payload: result,
      });
        
    }).catch(async (err)=> {
      console.log('error loading cards');
    });
      
  } , [dashboardState]);

  return (
    <OrdersContext.Provider value={{ loadScore, dashboardState, dashboardDispatch }}>
      {children}
    </OrdersContext.Provider>
  );
}

function useOrders() {
  const context = useContext(OrdersContext);

  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }

  return context;
}

export { OrdersProvider, useOrders };