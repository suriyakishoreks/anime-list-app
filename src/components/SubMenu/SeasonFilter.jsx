import React, { useState } from 'react';

import DropDown from '../DropDown';

import {getYearList, SEASONS} from '../constants/index';
import styles from '../../styles/SeasonFilter.module.scss';

export default function SeasonFilter() {

    const [season, setSeason] = useState('fall');
    const [year, setYear] = useState('2021');

    return (
        <div className={styles.seasonFilter}>
            <div className={styles.filterContainer}>
                <div className={styles.filterDetail}>
                    <h5>Season</h5>
                    <DropDown
                        active={season}
                        setActive={(val) => { setSeason(val); }}
                        containerWidth='100px'
                        dropDownList={Object.keys(SEASONS)} />
                </div>
                <div className={styles.filterDetail}>
                    <h5>Year</h5>
                    <DropDown
                        active={year}
                        setActive={(val) => { setYear(val); }}
                        containerWidth='100px'
                        dropDownList={getYearList()} />
                </div>
            </div>
            <button className={styles.button}>Go</button>
        </div>
    );
}
