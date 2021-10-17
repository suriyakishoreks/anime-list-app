import React from 'react';
import { useParams } from 'react-router';

import styles from '../styles/Anime.module.scss';

export default function Anime () {

    const {id} = useParams();

    return (
        <div className={styles.anime}>

        </div>
    );
}