import { useEffect } from 'react';
import { useApplication } from '../../../hooks/app-hook';

import DashboardApp from '../DashboardApp';
import LessonsApp from '../LessonsApp';

function App() {

  const { application } = useApplication();

  useEffect(() => {
    
  }, [application])

  return (
    application ===  'dashboard' ? <DashboardApp/> : <LessonsApp />
  );
}

export default App;
