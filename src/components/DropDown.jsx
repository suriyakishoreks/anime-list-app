import React from 'react';

import styles from '../styles/DropDown.module.scss';

export default function DropDown({active, setActive, dropDownList, containerWidth}) {

    return (
        <div className={styles.dropDown} style={{ width: containerWidth }}>
            <div className={styles.active}>
                <p>{active}</p>

            </div>

        </div>
    );
}
