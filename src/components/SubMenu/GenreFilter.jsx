import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateGenreFilter } from '../../store/action';

import CheckBox from '../CheckBox';
import { GENRE } from '../../constants';
import styles from '../../styles/components/submenu/GenreFilter.module.scss';

export default function GenreFilter() {

    const history = useHistory();
    const search = useSelector((state) => state.searchFilter);
    const rating = useSelector((state) => state.ratingFilter);
    const clearFilter = useSelector((state) => state.clearFilter);
    const dispatch = useDispatch();
    const [selectedFilter, setSelectedFilter] = useState(new Set());

    useEffect(() => {
        setSelectedFilter(new Set());
        dispatch(updateGenreFilter({
            filterSet: new Set(),
            value: ''
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clearFilter]);

    function onClickHandler(id) {
        const newSet = new Set([...selectedFilter]);

        if (newSet.has(id)) {
            newSet.delete(id);
            setSelectedFilter(newSet);
        }
        else if (newSet.size === 4)
            return;
        else {
            newSet.add(id);
            setSelectedFilter(newSet);
        }
        let genreFilter = ``;
        newSet.forEach(filter => {
            genreFilter = `${genreFilter}${genreFilter ? `,${filter}` : filter}`;
        })
        dispatch(updateGenreFilter({
            filterSet: newSet,
            value: genreFilter
        }));
        history.push(`/listing/search?q=${search}&genre=${genreFilter}&rating=${rating.value}`);
    }

    return (
        <div className={styles.genreFilter}>
            <div className={styles.titleContainer}>
                <h5>Genre</h5>
            </div>
            <div className={styles.genreFilterInner}>
                {Object.keys(GENRE).map(key =>
                    <CheckBox key={key} id={GENRE[key].id} value={GENRE[key].title}
                        setSelected={onClickHandler}
                        selected={selectedFilter} />
                )}
            </div>
        </div>
    );
}