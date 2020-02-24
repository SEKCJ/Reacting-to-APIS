import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center mt-4">
                <a href="index.html">
                    <img src="http://ghibliapi.herokuapp.com/images/logo.svg" alt="" style={{
                        'border': '3px solid white',
                        'borderRadius': '20em', 'backgroundColor': 'rgb(50,50,50)',
                        'width': '25em', 'height': '5em'
                    }} />
                </a>
            </div>
        )
    }
}

export default Header