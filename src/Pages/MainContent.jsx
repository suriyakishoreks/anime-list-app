import React, { Fragment, lazy, Suspense } from "react";
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import styles from "../styles/pages/MainContent.module.scss";

const Home = lazy(() => import("./home"));
const Listing = lazy(() => import("./listing"));
const Error = lazy(() => import("./error"));
const Anime = lazy(() => import("./anime"));

export default function MainContent() {

  return (
    <Fragment>
      <div className={styles.mainContent}>
        <ErrorBoundary>
          <Suspense fallback={null} >
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
          </Suspense>
        </ErrorBoundary>
      </div>
    </Fragment>
  );
}
