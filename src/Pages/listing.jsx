import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { endPoints } from "../components/API/endpoints";

import styles from '../styles/Listing.module.scss';

import fetchAPI from '../components/API/index';

export default function Listing() {

    const history = useHistory();
    const { id } = useParams();
    const [anime, setAnime] = useState([]);
    const [endPoint, setEndPoint] = useState(endPoints.upcoming());

    useEffect(() => {
        async function fetchData() {
            const data = await fetchAPI(endPoint.url);
            setAnime(data[endPoint.path] ? data[endPoint.path] : []);
        }
        fetchData();
    }, [endPoint.url, endPoint.path]);

    function onClickHandler(id) {
        history.push(`/anime/${id}`);
    }

    if (anime.length === 0)
        return <h3>No Results found!</h3>;

    return (
        <Fragment>
            <h2 className={styles.title}>{endPoint.id}</h2>
            <div className={styles.listing}>
                {anime.map(e => (
                    <div onClick={() => { onClickHandler(e.mal_id); }} className={styles.poster} key={e.mal_id}>
                        <img className={styles.img} src={e.image_url} alt="img" />
                    </div>
                ))}
            </div>
        </Fragment>
    );
}
