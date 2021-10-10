import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';

import App from './components/apps/App';
import GlobalStyle from './styles/global';

import { ApplicationProvider } from './hooks/app-hook';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter >
      <ApplicationProvider>
        <GlobalStyle />
        <App />
      </ApplicationProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

