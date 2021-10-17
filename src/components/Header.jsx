import React, { Fragment } from "react";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from '../styles/Header.module.scss';

export default function Header() {
  
  return (
    <Fragment>
      <h1 className={styles.logo}>Anime List</h1>
      <Link className={styles.menu} to="/">Home</Link>
      <div>
        <SearchBar />
      </div>
    </Fragment>
  );
}
