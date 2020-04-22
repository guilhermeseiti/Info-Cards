import React from 'react';

import ContextKey from './ContextKey/ContextKey'
import ContextValue from './ContextValue/ContextValue.js'

import classes from './Context.module.css';


const context = (props) => (
    <div className={classes.Context}>
        <ContextKey label={props.label} />
        <ContextValue value={props.value} />
    </div>
)

export default context