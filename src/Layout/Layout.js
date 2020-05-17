import React, { Component } from 'react'

import Card from '../Card/Card'
import classes from './Layout.module.css'

class Layout extends Component {

    state = {
        data: [{
            title: 1,
            Operation: '23 - A',
            'Started Date': '10/12/1999 05:00',
            'Conclusion Date': '05/12/2100 01:00',
            Temperature: '500',
            Dimension: 1000,
            Progress: '15%',
        }, {
            title: 2,
            Operation: '50',
            'Started Date': '01/01/2000 05:00',
            'Conclusion Date': '01/01/2010 01:00',
            Temperature: '500',
            Dimension: 554,
            Progress: '98%',
        }]
    }
    render() {
        //console.log(this.state.data)
        const cards = (this.state.data)
            .map((elem,i) => {
                return (<Card key={elem.id+i} data={elem} />)
            })
        return (

            <div className={classes.Layout}>
                {cards}

            </div>
        )
    }
}
export default Layout