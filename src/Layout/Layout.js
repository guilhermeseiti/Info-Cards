import React, { Component } from 'react'

import Card from '../Card/Card'
import classes from './Layout.module.css'

class Layout extends Component {

    state = {
        data: [{
            id: 123,
            Operation: '403',
            'Started Date': '05/12/1994 05:00',
            'Conclusion Date': '05/12/2100 01:00',
            Temperature: '500A',
            Dimension: 1000,
            Progress: '15%',
        }, {
            id: 1234,
            Operation: '405',
            'Started Date': '01/01/2000 05:00',
            'Conclusion Date': '01/01/2010 01:00',
            Temperature: '500A',
            Dimension: 554,
            Progress: '98%',
        }]
    }
    render() {
        //console.log(this.state.data)
        const cards = (this.state.data)
            .map(elem => {
                return (<Card data={elem} />)
            })
        return (

            <div className={classes.Layout}>
                {cards}

            </div>
        )
    }
}
export default Layout