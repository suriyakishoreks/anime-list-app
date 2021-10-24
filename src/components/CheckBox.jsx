import React from 'react';

import styles from '../styles/CheckBox.module.scss';

export default function CheckBox({ value, setSelected, selected, id }) {

    return (
        <div className={`${styles.container} ${selected.has(id) ? styles.selected : ''}`}
            onClick={() => { setSelected(id) }}>
            {value}</div>
    );
}