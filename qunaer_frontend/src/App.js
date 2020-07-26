import React from 'react';
import './App.css';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';
import Supermarket1 from './components/index/content/routes/Supermaeket1';
// import { Provider } from 'react-redux';
// import store from './store';
import { GlobalStyle } from './style';

function App() {
  return (
    // <Provider store={store}>
    <HashRouter>
      <GlobalStyle />
      {renderRoutes(routes)}
      
    </HashRouter>
    // </Provider>
  );
}

export default App;
