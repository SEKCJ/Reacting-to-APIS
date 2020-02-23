import React, { Component } from 'react';
import Map from './map'
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            MovieInfo: [],
            title: [],
            description: [],
        }
        this.fetch()
    }

    fetch() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj => this.SplitInfo(obj)
            )
    }

    SplitInfo(obj) {
        let local_title_arr = []
        let local_description_arr = []
        obj.forEach((element) => {
            local_title_arr.push(element.title)
            local_description_arr.push(element.description)
        })
        this.setState({
            title: local_title_arr,
            description: local_description_arr,
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="title d-flex justify-content-center mb-4">Films:</h1>
                <Map arr1 = {this.state.title} arr2 = {this.state.description}></Map>
            </React.Fragment>
        )
    }
}

export default App