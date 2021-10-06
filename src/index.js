import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/apps/App';
import GlobalStyle from './styles/global';

import { ApplicationProvider } from './hooks/app-hook';

ReactDOM.render(
  <React.StrictMode>
    <ApplicationProvider>
      <GlobalStyle />
      <App />
    </ApplicationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

