import React from 'react';

import { RATING } from '../constants/index';

import styles from '../../styles/RatingFilter.module.scss';

export default function RatingFilter() {

    return (
        <div className={styles.ratingFilter}>
            <div className={styles.titleContainer}>
                <h5>Rating</h5>
            </div>
            <div className={styles.ratingContainer}>
                {Object.keys(RATING).map(key =>
                    <div className={styles.rating}>{RATING[key].title}</div>
                )}
            </div>
        </div>
    );
}