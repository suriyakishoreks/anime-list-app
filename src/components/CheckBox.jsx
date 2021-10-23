import React, { useState } from 'react';

import styles from '../styles/CheckBox.module.scss';

export default function CheckBox({ value }) {

    const [selected, setSelected] = useState(false);

    return (
        <div className={`${styles.container} ${selected ? styles.selected : ''}`}
            onClick={() => { setSelected(prevState => !prevState) }}>
            {value}</div>
    );
}