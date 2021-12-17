import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import CheckBox from '../CheckBox';
import { RATING } from '../../constants/index';

import { updateRatingFilter } from '../../store/action';

import styles from '../../styles/components/submenu/RatingFilter.module.scss';

export default function RatingFilter() {

    const history = useHistory();
    const search = useSelector((state) => state.searchFilter);
    const genre = useSelector((state) => state.genreFilter);
    const clearFilter = useSelector((state) => state.clearFilter);
    const dispatch = useDispatch();
    const [selectedRating, setSelectedRating] = useState(new Set());

    useEffect(() => {
        setSelectedRating(new Set());
        dispatch(updateRatingFilter({
            filterSet: new Set(),
            value: ''
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        history.push(`/listing/search?q=${search}&genre=${genre.value}&rating=${ratingFilter}`);
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