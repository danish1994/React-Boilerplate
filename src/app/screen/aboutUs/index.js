import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";

class AboutUs extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">AboutUs</h1>
                    <Link to="/">Home</Link>
                </header>
            </div>
        );
    }
}

export default AboutUs;