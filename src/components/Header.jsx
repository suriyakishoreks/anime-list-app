import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

import { DESKTOP_VIEW } from './constants/index';
import menuIcon from '../assets/menu.svg';
import styles from '../styles/Header.module.scss';

export default function Header() {

  const windowViewType = useSelector((state) => state.windowViewType);

  return (
    <Fragment>
      {/* <h1 className={styles.logo}>Anime List</h1> */}
      <Link className={styles.logo} to="/">Anime List</Link>
      <div className={styles.section}>
        <SearchBar />
        {(windowViewType !== DESKTOP_VIEW) && <img src={menuIcon} alt='menu'/>}
      </div>
    </Fragment>
  );
}
