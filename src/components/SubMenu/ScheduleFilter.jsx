import React, { useState } from 'react';
import {useHistory} from "react-router";

import DropDown from '../DropDown';
import { DAYS } from '../constants';

import styles from '../../styles/ScheduleFilter.module.scss';

export default function ScheduleFilter() {

    const history = useHistory();
    const [day, setDay] = useState(0);
    
    function onClickHandler() {
        history.push(`/listing/schedule?day=${day}`);
    }

    return (
        <div className={styles.scheduleFilter}>
            <h5>Schedule</h5>
            <div className={styles.scheduleContainer}>
                <div>
                    <p className={styles.scheduleText}>Day of the week :</p>
                    <DropDown
                        active={day}
                        setActive={(val) => { setDay(val); }}
                        containerWidth='150px'
                        dropDownKeys={Object.keys(DAYS)}
                        dropDownList={DAYS} />
                </div>
                <button onClick={onClickHandler} className={styles.scheduleButton}>Go</button>
            </div>
        </div>
    );
}