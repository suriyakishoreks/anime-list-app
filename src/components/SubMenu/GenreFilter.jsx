import React, { useState } from 'react';
import CheckBox from '../CheckBox';
import { GENRE } from '../constants';
import styles from '../../styles/GenreFilter.module.scss';

export default function GenreFilter() {

    const [selectedFilter, setSelectedFilter] = useState(new Set());

    function onClickHandler(id) {
        if (selectedFilter.has(id)) {
            setSelectedFilter(prev => {
                prev.delete(id);
                console.log(prev);
                return new Set([...prev]);
            });
        }
        else {
            setSelectedFilter(prev => {
                prev.add(id);
                console.log(prev);
                return new Set([...prev]);
            });
        }
    }

    return (
        <div className={styles.genreFilter}>
            <div className={styles.titleContainer}>
                <h5>Genre</h5>
            </div>
            <div className={styles.genreFilterInner}>
                {Object.keys(GENRE).map(key =>
                    <CheckBox key={key} id={GENRE[key].id} value={GENRE[key].title}
                        setSelected={onClickHandler}
                        selected={selectedFilter} />
                )}
            </div>
        </div>
    );
}