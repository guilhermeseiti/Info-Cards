import React, { Component } from 'react'

import Title from './Title/Title'
import Context from './Context/Context'

import classes from './Card.module.css'


class Card extends Component {

    render() {
        const data = Object.keys(this.props.data)
            .map(key => {
                //console.log(key, this.props.registros[key])
                if (key !== 'id')
                    return (<Context label={key} value={this.props.data[key]} />)
                else
                    return (<Title title={this.props.data[key]} />)
            })
        return (
            <div className={classes.Card}>
                {data}
            </div>
        )
    }
}

export default Card