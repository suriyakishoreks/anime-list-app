import React, { Fragment, lazy, Suspense, useRef } from "react";
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import styles from "../styles/pages/MainContent.module.scss";

const Home = lazy(() => import("./home"));
const Listing = lazy(() => import("./listing"));
const Error = lazy(() => import("./error"));
const Anime = lazy(() => import("./anime"));

export default function MainContent() {

  const scrollRef = useRef(null);

  function setVerticalScroll(value) {
    scrollRef.current.scrollTop = value;
  }

  return (
    <Fragment>
      <div ref={scrollRef} className={styles.mainContent}>
        <ErrorBoundary>
          <Suspense fallback={null} >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/anime/:id">
                <Anime setVerticalScroll={setVerticalScroll} />
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
