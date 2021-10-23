import React from "react";
import styles from '../../styles/SubMenu.module.scss';

import SeasonFilter from './SeasonFilter';
import GenreFilter from './GenreFilter';
import RatingFilter from './RatingFilter';
import ScheduleFilter from './ScheduleFilter';

export default function SubMenu() {
  return (
    <div className={styles.subMenu}>
      <div className={styles.subMenuInner}>
        <SeasonFilter />
        <GenreFilter />
        <RatingFilter />
        <ScheduleFilter />
      </div>
    </div>
  );
}
