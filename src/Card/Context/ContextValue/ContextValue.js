import React from 'react';

import classes from './ContextValue.module.css';

const contextValue = (props) => (
    <div className={classes.ContextValue}>{props.value}</div>
)

export default contextValue