import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { endPoints } from '../components/API/endpoints';
import fetchAPI from '../components/API/index';

import AnimeCard from '../components/AnimeCard';
import AnimeHeader from '../components/AnimeHeader';

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
            setRecommendations(recomData && recomData.recommendations ? recomData.recommendations : []);
        }
        fetchData(id);
    }, [id]);

    return (
        <div className={styles.anime}>
            <div className={styles.leftContainer}>
                <img className={styles.poster} src={anime.image_url} alt="Poster" />
                <AnimeCard anime={anime} />
            </div>
            <div className={styles.rightContainer}>
                <AnimeHeader anime={anime} />
                <p className={styles.synopsis}>{anime.synopsis}</p>
                <div>
                    <h2 className={styles.contentHeading}>Related Anime</h2>
                    <div className={styles.contentCardOuter}>
                        <div className={styles.contentCardInner}>
                            <ul>
                                {Object.keys(anime.related ?? {})?.map(key =>
                                    <Fragment>
                                        {anime.related?.[key]?.map(element =>
                                            element.type === 'anime' ?
                                                <li><Link className={styles.logo} to={`/anime/${element.mal_id}`}>
                                                    {`${element.name} (${key})`}</Link></li> : null)}
                                    </Fragment>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className={styles.contentHeading}>Recommendations</h2>
                    <div className={styles.contentCard}>

                    </div>
                </div>
            </div>
        </div>
    );
}