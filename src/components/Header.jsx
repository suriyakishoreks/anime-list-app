import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar";

import { setMenuStatus } from './store/action';
import { DESKTOP_VIEW } from './constants/index';
import menuOpenIcon from '../assets/menu.svg';
import menuCloseIcon from '../assets/close.svg';
import styles from '../styles/Header.module.scss';

export default function Header() {

  const dispatch = useDispatch();
  const windowViewType = useSelector((state) => state.windowViewType);
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  function menuHandler(status) {
    dispatch(setMenuStatus(status));
  }

  return (
    <Fragment>
      {/* <h1 className={styles.logo}>Anime List</h1> */}
      <Link className={styles.logo} to="/">Anime List</Link>
      <div className={styles.section}>
        <SearchBar />
        {(windowViewType !== DESKTOP_VIEW) &&
          (isMenuOpen ?
            <img className={styles.menuIcon} onClick={() => { menuHandler(false) }} src={menuCloseIcon} alt='menuClose' />
            : <img className={styles.menuIcon} onClick={() => { menuHandler(true) }} src={menuOpenIcon} alt='menuOpen' />)}
      </div>
    </Fragment>
  );
}
