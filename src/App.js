import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainContent from "./Pages/MainContent";
import SubMenu from './components/SubMenu/SubMenu';
import styles from './styles/App.module.scss';


export default function App() {

  return (
    <Fragment>
      <Router basename="/anime-list-app">
        <div className={styles.mainSection}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.mainContent}>
            <MainContent />
          </div>
        </div>
        <div className={styles.subMenu}>
          <SubMenu />
        </div>
      </Router>
    </Fragment>
  );
}

