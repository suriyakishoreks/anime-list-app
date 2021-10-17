import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSearch } from "./store/action";
import {useHistory} from "react-router";
import styles from "../styles/SearchBar.module.scss";
import searchIcon from "../assets/search.svg";

export default function SearchBar() {
  const history = useHistory();
  const search = useSelector((state) => state.search);
  const clearSearch = useSelector((state) => state.clearSearch);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    const onChangeTimer = setTimeout(() => {
      dispatch(updateSearch(searchValue));
      (searchValue.length > 2) && history.push(`/listing/search`);
    }, 400);

    return () => {
      clearTimeout(onChangeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  useEffect(() => {
    setSearchValue("");
    dispatch(updateSearch(searchValue));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[clearSearch]);

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
