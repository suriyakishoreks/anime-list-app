import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import classes from '../styles/components/PortraitCarousel.module.scss';

import leftArrowIcon from '../assets/left-arrow.png';
import rightArrowIcon from '../assets/right-arrow.png';

import fetchAPI from '../API/index';

const divWidth = 0.85;

export default function PortraitCarousel({ endPoint }) {

    const rowRef = useRef(null);
    const history = useHistory();
    const [showNav, setShowNav] = useState(false);
    const [anime, setAnime] = useState([]);
    const [mainContentWidth, setMainContentWidth] = useState(rowRef.current?.offsetWidth);

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        setMainContentWidth(rowRef.current?.offsetWidth);

        return () => window.removeEventListener("resize", updateWidth);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowRef.current]);

    function updateWidth() {
        setMainContentWidth(rowRef.current?.offsetWidth);
    }

    useEffect(() => {
        async function fetchData() {
            const data = await fetchAPI(endPoint.url);
            setAnime(data[endPoint.path] ? data[endPoint.path] : []);
        }
        fetchData();
    }, [endPoint.url, endPoint.path]);

    function scroll(direction) {
        if (direction === "left")
            rowRef.current.scroll({
                left: rowRef.current.scrollLeft - divWidth * mainContentWidth,
                behavior: 'smooth'
            });
        else
            rowRef.current.scroll({
                left: rowRef.current.scrollLeft + divWidth * mainContentWidth,
                behavior: 'smooth'
            });
    }

    function onClickHandler(id) {
        history.push(`/anime/${id}`);
    }

    if (anime.length === 0)
        return null;

    return (
        <div className={classes.row} onMouseEnter={() => { setShowNav(true) }} onMouseLeave={() => { setShowNav(false) }}>
            <h2>{endPoint.id}</h2>
            <div ref={rowRef} className={classes.rowContent}>

                {showNav && <button className={`${classes.leftbtn} ${classes.btn}`} onClick={() => { scroll("left") }} >
                    <img className={classes.arrow} src={leftArrowIcon} alt="Left Arrow" /></button>}

                {anime.map(e => (
                    <div onClick={() => { onClickHandler(e.mal_id); }} className={classes.poster} key={e.mal_id}>
                        <img className={classes.img} src={e.image_url} alt="img" />
                    </div>
                ))}

                {showNav && <button className={`${classes.rightbtn} ${classes.btn}`} onClick={() => { scroll("right") }} >
                    <img className={classes.arrow} src={rightArrowIcon} alt="Right Arrow" /></button>}

            </div>
        </div>
    );
}
