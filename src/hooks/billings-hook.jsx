import React, { createContext, useCallback, useReducer, useEffect, useContext }  from 'react';
import { surname } from "react-lorem-ipsum";
import { format } from 'date-fns'

import api from '../services/api';

import { billingReducer, billingInitialValue } from '../reducers/billing-reducer';

const BillingsContext = createContext();

const BillingsProvider = ({ children }) => {
  
  const [dashboardState, dashboardDispatch] = useReducer(billingReducer, billingInitialValue);
    
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
      await api.post('api/Rateios/BillingScore', {
        'CodigoTerritorio': dashboardState.territory,
        'FilterType': dashboardState.navigationPeriod,
        'FilterValue': dashboardState.filter,
      }).then((res) => {

      var result = res.data;
      if(!result)
        return;

      var series = [];
      var periods = [];

      if(dashboardState.navigationFilter === 'BOTH' || dashboardState.navigationFilter === 'INCOMES') {
        var incomingSeries = 
        {
          data: [...result.incomes.map(income => income.result)],
          type: 'line',
          smooth: true,
        };
        periods= [ ...result.incomes.map(income => income.date) ];
        series = [...series, incomingSeries];
      }

      if(dashboardState.navigationFilter === 'BOTH' || dashboardState.navigationFilter === 'SALES') {
        var salesSeries = 
        {
          data: [...result.sales.map(sale => sale.result)],
          type: 'line',
          smooth: true,
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
        console.log('error loading billings score');
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
    <BillingsContext.Provider value={{ loadScore, dashboardState, dashboardDispatch }}>
      {children}
    </BillingsContext.Provider>
  );
}

function useBillings() {
  const context = useContext(BillingsContext);

  if (!context) {
    throw new Error('useBillings must be used within an BillingsProvider');
  }

  return context;
}

export { BillingsProvider, useBillings };