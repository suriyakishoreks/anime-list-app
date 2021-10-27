import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import {useHistory} from "react-router";
import Home from "./home";
import Listing from "./listing";
import Error from "./error";
import Anime from "./anime";
import { Switch, Route } from 'react-router-dom';
import styles from "../styles/MainContent.module.scss";

export default function MainContent() {
  const history = useHistory();
  const search = useSelector((state) => state.searchFilter);
  const genre = useSelector((state) => state.genreFilter);
  const rating = useSelector((state) => state.ratingFilter);

  useEffect(() => {
    if (genre.value || rating.value || search) {
      history.push(`/listing/search?q=${search}&genre=${genre.value}&rating=${rating.value}`);
    }
    else if (!(genre.value && rating.value && search)) {
      history.push(`/`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[genre, rating, search]);

  return (
    <Fragment>
      <div className={styles.mainContent}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/anime/:id">
            <Anime />
          </Route>
          <Route path="/listing/:id">
            <Listing />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}
