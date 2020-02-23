import React, { Component } from 'react';
import Map from './map'
import 'isomorphic-fetch';
import 'es6-promise';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            property1: [],
            property2: [],
            property3: [],
            property4: [],
            hasLoaded: "",
            id: "",
        }
    }

    fetch_boy(url, id) {
        fetch(url)
            .then(res => res.json())
            .then(obj => this.SplitInfo(obj, id)
            )
    }

    SplitInfo(obj, id) {
        let blank_arr_1 = []
        let blank_arr_2 = []
        let blank_arr_3 = []
        let blank_arr_4 = []
        if (id === 'films') {
            obj.forEach((element) => {
                blank_arr_1.push(element.title)
                blank_arr_2.push(element.description)
            })
        } else if (id === 'people') {
            obj.forEach((element) => {
                blank_arr_1.push(element.name)
                blank_arr_2.push(element.age)
                blank_arr_3.push(element.gender)
                blank_arr_4.push(element.url)
            })
            this.setState({
                property3: blank_arr_3,
                property4: blank_arr_4,
            })
        } else if (id === 'vehicles') {
            obj.forEach((element) => {
                blank_arr_1.push(element.name)
                blank_arr_2.push(element.description)
                blank_arr_3.push(element.vehicle_class)
                blank_arr_4.push(element.length)
            })
            this.setState({
                property3: blank_arr_3,
                property4: blank_arr_4,
            })
        }
        this.setState({
            property1: blank_arr_1,
            property2: blank_arr_2,
            id: id,
        })
    }

    handleClick(event, id) {
        event.preventDefault();
        if (id === 'films') {
            setTimeout(() => {
                this.setState({
                    hasLoaded: id,
                })
            }, 350)
            this.fetch_boy("https://ghibliapi.herokuapp.com/films", id)
        } else if (id === "people") {
            setTimeout(() => {
                this.setState({
                    hasLoaded: id,
                })
            }, 350)
            this.fetch_boy("https://ghibliapi.herokuapp.com/people", id)
        } else if (id === "vehicles") {
            setTimeout(() => {
                this.setState({
                    hasLoaded: id,
                })
            }, 350)
            this.fetch_boy("https://ghibliapi.herokuapp.com/vehicles", id)
        }
    }

    render() {
        if (this.state.hasLoaded === "films") {
            return (
                <React.Fragment>
                    <h1 className="title d-flex justify-content-center mt-4 mb-2">Films:</h1>
                    <Map arr1={this.state.property1} arr2={this.state.property2} id={this.state.id}></Map>
                </React.Fragment>
            )
        } else if (this.state.hasLoaded === "people") {
            return (
                <React.Fragment>
                    <h1 className="title d-flex justify-content-center mt-4 mb-2">People:</h1>
                    <Map arr1={this.state.property1} arr2={this.state.property2}
                        arr3={this.state.property3} arr4={this.state.property4} id={this.state.id}></Map>
                </React.Fragment>
            )
        } else if (this.state.hasLoaded === "vehicles") {
            return (
                <React.Fragment>
                    <h1 className="title d-flex justify-content-center mt-4 mb-2">Vehicles:</h1>
                    <Map arr1={this.state.property1} arr2={this.state.property2}
                        arr3={this.state.property3} arr4={this.state.property4} id={this.state.id}></Map>
                </React.Fragment>
            )
        } else {
            return (
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center" id="load-container">
                        <img src="http://ghibliapi.herokuapp.com/images/logo.svg" alt="" />
                        <div className="d-flex flex-row justify-content-center my-3">
                            <button className="btn btn-primary ml-3 py-1 px-4"
                                onClick={(event) => this.handleClick(event, 'films')}>
                                <h1>Load Films</h1>
                            </button>
                            <button className="btn btn-primary ml-3 py-1 px-4"
                                onClick={(event) => this.handleClick(event, 'people')}>
                                <h1>Load People</h1>
                            </button>
                            <button className="btn btn-primary ml-3 py-1 px-4"
                                onClick={(event) => this.handleClick(event, 'vehicles')}>
                                <h1>Load Vehicles</h1>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default App