import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import CheckBox from '../CheckBox';
import { RATING } from '../constants/index';

import { updateRatingFilter } from '../store/action';

import styles from '../../styles/RatingFilter.module.scss';

export default function RatingFilter() {

    const clearFilter = useSelector((state) => state.clearFilter);
    const dispatch = useDispatch();
    const [selectedRating, setSelectedRating] = useState(new Set());

    useEffect(() => {
        setSelectedRating(new Set());
    }, [clearFilter]);

    function onClickHandler(id) {
        const newSet = new Set();
        if (selectedRating.has(id)) {
            setSelectedRating(newSet);
        }
        else {
            newSet.add(id);
            setSelectedRating(newSet);
        }
        let ratingFilter = ``;
        newSet.forEach(filter => {
            ratingFilter = `${ratingFilter}${ratingFilter ? `,${filter}` : filter}`;
        })
        dispatch(updateRatingFilter({
            filterSet: newSet,
            value: ratingFilter
        }));
    }

    return (
        <div className={styles.ratingFilter}>
            <div className={styles.titleContainer}>
                <h5>Rating</h5>
            </div>
            <div className={styles.ratingContainer}>
                {Object.keys(RATING).map(key =>
                    <CheckBox key={key} id={RATING[key].id} value={RATING[key].title}
                        setSelected={onClickHandler}
                        selected={selectedRating} />
                )}
            </div>
        </div>
    );
}