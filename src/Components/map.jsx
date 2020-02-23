import React, { Component } from 'react'
import Card from './card'

class Map extends Component {
    render() {
        if (this.props.id === "films") {
            return (
                this.props.arr1.map((element, index) => {
                    return (
                        <Card title={element} property2={this.props.arr2[index]} key={index} />
                    )
                })
            )

        } else if (this.props.id === "people") {
            return (
                this.props.arr1.map((element, index) => {
                    return (
                        <Card title={element} property2={this.props.arr2[index]}
                            property3={this.props.arr3[index]} property4={
                                <a href={`${this.props.arr4[index]}`} target="_blank" rel="noopener noreferrer">
                                    {this.props.arr4[index]}
                                </a>} key={index} />
                    )
                })
            )

        } else if (this.props.id === "vehicles") {
            return (
                this.props.arr1.map((element, index) => {
                    return (
                        <Card title={element} property2={this.props.arr2[index]}
                            property3={this.props.arr3[index]} property4={this.props.arr4[index]} key={index} />
                    )
                })
            )

        } else {
            return (
                <h1>broke {':('}</h1>
            )
        }
    }
}

export default Map