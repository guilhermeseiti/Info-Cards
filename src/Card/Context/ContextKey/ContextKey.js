import React from 'react';

import classes from './ContextKey.module.css';

const contextKey = (props) => (
    <div className={classes.ContextKey}>{props.label}</div>
)

export default contextKey