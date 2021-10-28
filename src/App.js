import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import {setWindowView} from './components/store/action';
import {getViewType} from './components/constants/index';

import Header from './components/Header';
import MainContent from "./Pages/MainContent";
import SubMenu from './components/SubMenu/SubMenu';
import styles from './styles/App.module.scss';


export default function App() {

  const windowViewType = useSelector((state) => state.windowViewType);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(windowViewType);
  }, [windowViewType]);

  function updateWidth() {
    dispatch(setWindowView(getViewType(window.innerWidth)));
  }

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

