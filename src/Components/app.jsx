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
            hasLoaded: false,
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

    handleClick(event) {
        event.preventDefault();
        setTimeout(() => {
            this.setState({
                hasLoaded: true,
            })
        }, 350)

    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <h1 className="title d-flex justify-content-center my-4">Films:</h1>
                    <Map arr1={this.state.title} arr2={this.state.description}></Map>
                </React.Fragment>
            )
        } else {
            return (
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center" id="load-container">
                        <img src="http://ghibliapi.herokuapp.com/images/logo.svg" alt="" />
                        <div className="d-flex flex-row justify-content-center my-3">
                            <h1 className="d-flex align-self-center">Load?</h1>
                            <button className="btn btn-primary ml-3 py-0 px-4" onClick={(event) => this.handleClick(event)}>
                                YES
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default App