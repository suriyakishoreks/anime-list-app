import React from "react";
import styles from '../styles/SubMenu.module.scss';

import SeasonFilter from './SeasonFilter';
import GenreFilter from './GenreFilter';
import SortingFilter from './SortingFilter';

export default function SubMenu() {
  return (
  <div className={styles.subMenu}>
      <SeasonFilter />
      <GenreFilter />
      <SortingFilter />
  </div>
  );
}
