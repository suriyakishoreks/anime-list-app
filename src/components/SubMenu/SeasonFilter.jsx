import React, { useState } from 'react';
import DropDown from '../DropDown';

import {useHistory} from "react-router";

import {getYearList, SEASONS} from '../constants/index';
import styles from '../../styles/SeasonFilter.module.scss';

export default function SeasonFilter() {

    const history = useHistory();
    const [season, setSeason] = useState('fall');
    const [year, setYear] = useState('2021');

    function onClickHandler() {
        history.push(`/listing/season?season=${season}&year=${year}`);
    }

    return (
        <div className={styles.seasonFilter}>
            <div className={styles.filterContainer}>
                <div className={styles.filterDetail}>
                    <h5>Season</h5>
                    <DropDown
                        active={season}
                        setActive={(val) => { setSeason(val); }}
                        containerWidth='100px'
                        dropDownKeys={Object.keys(SEASONS)}
                        dropDownList = {SEASONS} />
                </div>
                <div className={styles.filterDetail}>
                    <h5>Year</h5>
                    <DropDown
                        active={year}
                        setActive={(val) => { setYear(val); }}
                        containerWidth='100px'
                        dropDownKeys={Object.keys(getYearList()).sort((a, b) => b-a)} 
                        dropDownList = {getYearList()} />
                </div>
            </div>
            <button onClick={onClickHandler} className={styles.button}>Go</button>
        </div>
    );
}
