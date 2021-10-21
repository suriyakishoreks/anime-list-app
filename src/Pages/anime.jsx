import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import {endPoints} from '../components/API/endpoints';
import fetchAPI from '../components/API/index';

import styles from '../styles/Anime.module.scss';

export default function Anime() {
    
    const { id } = useParams();
    const [anime, setAnime] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        async function fetchData(animeId) {
            const animeData = await fetchAPI(endPoints.anime(animeId));
            const recomData = await fetchAPI(endPoints.anime(animeId, 'recommendations'));
            setAnime(animeData ? animeData : {});
            setRecommendations( recomData && recomData.recommendations ? recomData.recommendations : []);   
        }    
        fetchData(id);
    }, [id]);

    return (
        <div className={styles.anime}>
            <div className={styles.leftContainer}></div>
            <div className={styles.rightContainer}></div>
        </div>
    );
}