import React from 'react';

import styles from '../styles/components/DropDown.module.scss';

export default function DropDown({ active, setActive, dropDownKeys, dropDownList, containerWidth }) {

    return (
        <div className={styles.dropDown} >
            <select value={active} onChange={({ target: { value } }) => { setActive(value); }}
                style={{ width: containerWidth }}>
                {dropDownKeys.map(key =>
                    <option key={dropDownList[key].id} value={key}>
                        {dropDownList[key].title}</option>)}
            </select>
        </div>
    );
}
