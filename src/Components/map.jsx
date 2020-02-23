import React, { Component } from 'react'
import Card from './card'

class Map extends Component {
    render() {
        return (
            this.props.arr1.map((element, index) => {
                return (
                    <Card title={element} description={this.props.arr2[index]} key={index}/>
                )
            })
        )
    }
}

export default Map