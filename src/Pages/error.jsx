import React from 'react';
import { useHistory } from 'react-router-dom';

import error from '../assets/error-404.jpg';
import classes from '../styles/NoMatch.module.scss';

export default function Error() {

    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    return <div className={classes.error} >
        <img src={error} alt="404 error" />
        <h4>The Page you requested is not available.</h4>
        <button onClick={handleClick}>Home</button>
    </div>
}