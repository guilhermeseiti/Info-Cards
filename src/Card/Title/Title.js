import React from 'react';

import classes from './Title.module.css';

const title = (props) => (
    <div className={classes.Title}>Machine {props.title}</div>
)

export default title