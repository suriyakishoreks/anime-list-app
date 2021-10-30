import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchFilter } from "./store/action";
import {useHistory} from "react-router";
import styles from "../styles/SearchBar.module.scss";
import searchIcon from "../assets/search.svg";

export default function SearchBar() {
  const history = useHistory();
  const clearFilter = useSelector((state) => state.clearFilter);
  const genre = useSelector((state) => state.genreFilter);
  const rating = useSelector((state) => state.ratingFilter);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const onChangeTimer = setTimeout(() => {
      dispatch(updateSearchFilter(searchValue));
      (searchValue.length > 2 || genre.value || rating.value) && 
        history.push(`/listing/search?q=${searchValue}&genre=${genre.value}&rating=${rating.value}`);
    }, 400);

    return () => {
      clearTimeout(onChangeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    setSearchValue("");
    // dispatch(updateSearch(searchValue));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[clearFilter]);

  function onChangeHandler(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchField}
        type="text"
        placeholder="Search for Animes"
        onChange={onChangeHandler}
        value={searchValue}
        name="search"
        id="search"
        autoComplete="off"
      />
      <button tabIndex="-1" className={styles.searchButton}><img src={searchIcon} alt="Search Icon" /></button>
    </div>
  );
}
