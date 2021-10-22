import React from 'react';

import styles from '../styles/AnimeCard.module.scss';

export default function AnimeCard({anime}) { 
    return (
        <div className={styles.animeCard}>
            <div className={styles.scoreCard}>
                <p className={styles.heading}>Score</p>
                <p className={styles.rating}><span className={styles.score}>{anime.score}</span> &nbsp;by {anime.scored_by} users</p>
            </div>
            <p className={styles.details}>{anime.rating}</p>
            <p className={styles.details}>{anime.status}</p>
            {anime.genres?.map(element => <div className={styles.genre}>{element.name}</div>)}
            {anime.explicit_genres?.map(element => <div className={styles.genre}>{element.name}</div>)}
        </div>
    );
}