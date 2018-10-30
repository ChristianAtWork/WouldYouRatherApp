import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

// MUI - Fix: deprecated typography variants
// https://material-ui.com/style/typography/#strategies 
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
