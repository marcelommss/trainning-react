import React, { createContext, useCallback, useState, useContext }  from 'react';

const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {

  const [application, setApplication] = useState('dashboard');

  const switchApp = useCallback(() => {
    if(application === 'trainning'){
      setApplication('dashboard');
    }else{
      setApplication('trainning');
    }
  } , [application]);

  return (
    <ApplicationContext.Provider value={{ application, switchApp }}>
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