import React, { createContext, useCallback, useReducer, useEffect, useContext }  from 'react';
import { username } from "react-lorem-ipsum";

import api from '../services/api';

import roundAccurately from '../utils/round';

import { productsReducer, productInitialValue } from '../reducers/products-reducer';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  
  const [productsState, productDispatch] = useReducer(productsReducer, productInitialValue);
    
  useEffect(() => {
      productDispatch({
        type: "SET_TERRITORY",
        payload: '300560'
      });      
  },[]);
   
  useEffect(() => {
    loadProducts();
  },[productsState.territory]);
  
  const loadProducts = useCallback(async () => {
    console.log('loading products');
      await api.post('api/Rateios/TopProducts', {
        'CodigoTerritorio': productsState.territory,
        'FilterType': productsState.navigationPeriod,
        'FilterValue': productsState.filter,
      }).then((res) => {

      var result = res.data;
      if(!result)
        return;

      if(process.env.REACT_APP_FAKE_DATA){
        result = [...result.map(item=> {
          return {
            name: username(),
            code: item.code,
            totalValue: item.totalValue,
            totalVolume: item.totalVolume,
          };
          })];
      }

      productDispatch({
        type: "LOAD_PRODUCTS",
        payload: result
      });

      var options = {
          ...productsState.data,
          color: productsState.colors,
          series: [{
            ...productsState.data.series[0],
            data: result.map(item => {
            var sales = roundAccurately(item.totalValue,0);
            if(sales < 0)
              sales = sales* -1;
            return {
              value: sales,
              name: item.name,}
              ;
            }),
          }]          
        };

      console.log(options);
      productDispatch({
        type: "SET_GRAPHIC_DATA",
        payload: options
      });
        
    }).catch(async (err)=> {
      console.log('error loading products');
    });
      
  } , [productsState]);

  return (
    <ProductsContext.Provider value={{ loadProducts, productsState, productDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within an ProductsProvider');
  }

  return context;
}

export { ProductsProvider, useProducts };