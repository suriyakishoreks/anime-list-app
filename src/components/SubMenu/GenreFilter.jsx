import React from 'react';

import { GENRE } from '../constants';
import styles from '../../styles/GenreFilter.module.scss';

export default function GenreFilter() {

    return (
        <div className={styles.genreFilter}>
            <div className={styles.titleContainer}>
                <h5>Genre</h5>
            </div>
            <div className={styles.genreFilterInner}>
                {Object.keys(GENRE).map(key =>
                    <div className={styles.genre}>{GENRE[key].title}</div>
                )}
            </div>
        </div>
    );
}