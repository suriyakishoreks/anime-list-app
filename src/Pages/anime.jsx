import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
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
                <Related anime={anime} />
                <Recommendations recommendations={recommendations} />
            </div>
        </div>
    );
}

function Related({ anime }) {
    return (
        <div>
            <h2 className={styles.contentHeading}>Related Anime</h2>
            <div className={styles.contentCardOuter}>
                <div className={styles.contentCardInner} style={{WebkitJustifyContent: "flex-start"}}>
                    <ul className={styles.relatedList}>
                        {Object.keys(anime.related ?? {})?.map(key =>
                            <Fragment key={key}>
                                {anime.related?.[key]?.map(element =>
                                    element.type === 'anime' ?
                                        <li key={element.mal_id} ><Link className={styles.relatedItem} to={`/anime/${element.mal_id}`}>
                                            {`${element.name} (${key})`}</Link></li> : null)}
                            </Fragment>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function Recommendations({ recommendations }) {

    const history = useHistory();

    function onClickHandler(id) {
        history.push(`/anime/${id}`);
    }

    return (
        <div>
            <h2 className={styles.contentHeading}>Recommendations</h2>
            <div className={styles.contentCardOuter}>
                <div className={styles.contentCardInner} style={{maxHeight: "400px"}}>
                    {recommendations.map(element =>
                        <div key={element.mal_id} className={styles.recommendationsPoster} onClick={()=>{ onClickHandler(element.mal_id)}}>
                            <img src={element.image_url} alt="poster" />
                            <div>{element.recommendation_count}</div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}