import React from 'react';
import ReactDOM from 'react-dom';
import store from "./components/store/index";
import { Provider } from "react-redux";
import './styles/index.scss';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
