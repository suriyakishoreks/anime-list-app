import React from 'react';

import styles from '../styles/DropDown.module.scss';

export default function DropDown({ active, setActive, dropDownList, containerWidth }) {

    return (
        <div className={styles.dropDown} >
            <select value={active} onChange={({target: { value } }) => {setActive(value);}} 
                style={{ width: containerWidth }}>
                {dropDownList.map(element => 
                <option value={element}>{element}</option>)}
            </select>
        </div>
    );
}
