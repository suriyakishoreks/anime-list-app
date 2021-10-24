import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { endPoints } from "../components/API/endpoints";

import {DAYS, SEASONS, getYearList} from '../components/constants/index';

import styles from '../styles/Listing.module.scss';

import fetchAPI from '../components/API/index';

export default function Listing() {

    const history = useHistory();
    const location = useLocation();
    const { id } = useParams();
    const [anime, setAnime] = useState([]);
    const [title, setTitle] = useState("Results");
    
    useEffect(() => {
        async function fetchData(endPoint) {
            const data = await fetchAPI(endPoint.url);
            setAnime(data[endPoint.path] ? data[endPoint.path] : []);
        }
        const query = new URLSearchParams(location.search);
        if (id === "season") {
            const year = query.get("year");
            const season = query.get("season");
            const yearList = getYearList();
            const endPoint = endPoints.season(SEASONS[season], yearList[year]);
            fetchData(endPoint);
            setTitle(endPoint.id);
        } else if (id === "schedule") {
            let day = query.get("day");
            day = DAYS[day];
            const endPoint = endPoints.schedule(day);
            fetchData(endPoint);
            setTitle(endPoint.id);
        } else if (id === "search") {
            
        }
    }, [id, location]);

    function onClickHandler(id) {
        history.push(`/anime/${id}`);
    }

    if (anime.length === 0)
        return <h3>No Results found!</h3>;

    return (
        <Fragment>
            <h2 className={styles.title}>{title}</h2>
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
