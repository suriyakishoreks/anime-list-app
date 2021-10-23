import React, { useState } from 'react';

import DropDown from '../DropDown';
import { DAYS } from '../constants';

import styles from '../../styles/ScheduleFilter.module.scss';

export default function ScheduleFilter() {

    const [day, setDay] = useState('Monday');

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
                        dropDownList={DAYS} />

                </div>
                <button className={styles.scheduleButton}>Go</button>
            </div>
        </div>
    );
}