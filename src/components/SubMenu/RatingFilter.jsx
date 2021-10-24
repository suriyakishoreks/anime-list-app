import React, { useState } from 'react';

import CheckBox from '../CheckBox';
import { RATING } from '../constants/index';

import styles from '../../styles/RatingFilter.module.scss';

export default function RatingFilter() {

    const [selectedRating, setSelectedRating] = useState(new Set());

    function onClickHandler(id) {
        const newSet = new Set();
        if (selectedRating.has(id)) {
            setSelectedRating(newSet);
        }
        else {
            newSet.add(id);
            setSelectedRating(newSet);
        }
    }

    return (
        <div className={styles.ratingFilter}>
            <div className={styles.titleContainer}>
                <h5>Rating</h5>
            </div>
            <div className={styles.ratingContainer}>
                {Object.keys(RATING).map(key =>
                    <CheckBox key={key} id={RATING[key].id} value={RATING[key].title}
                        setSelected={onClickHandler}
                        selected={selectedRating} />
                )}
            </div>
        </div>
    );
}