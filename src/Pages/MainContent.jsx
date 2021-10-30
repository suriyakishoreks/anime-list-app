import React, { Fragment } from "react";
import Home from "./home";
import Listing from "./listing";
import Error from "./error";
import Anime from "./anime";
import { Switch, Route } from 'react-router-dom';
import styles from "../styles/MainContent.module.scss";

export default function MainContent() {

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
