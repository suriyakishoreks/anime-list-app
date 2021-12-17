import React from 'react';

import styles from '../styles/components/AnimeHeader.module.scss';

export default function AnimeHeader({ anime }) {

    return (
        <div className={styles.header}>
            <div className={styles.titleSection}>
                <p className={styles.title}>{anime.title}</p>
                <p className={styles.titleEnglish}>{anime.title_english}</p>
            </div>
            <div className={styles.infoSection}>
                <p>{anime.premiered}</p>
                <p>{anime.episodes} episodes</p>
            </div>
        </div>
    );
}