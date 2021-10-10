import React, { createContext, useCallback, useState, useContext }  from 'react';

import {useHistory} from 'react-router-dom'

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
    
  const history = useHistory();

  const [application, setApplication] = useState('dashboard');
  const [page, setPage] = useState('/');

  const changePage = useCallback((link) => {
    if(page === link)
      return;
    setPage(link);
    if(history)
      history.push(link);
  } , [page]);

  const switchApp = useCallback(() => {
    if(application === 'trainning'){
      setApplication('dashboard');
    }else{
      setApplication('trainning');
    }
  } , [application]);

  return (
    <ApplicationContext.Provider value={{ application, switchApp, changePage, page }}>
      {children}
    </ApplicationContext.Provider>
  );
}

function useApplication() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }

  return context;
}

export { ApplicationProvider, useApplication };