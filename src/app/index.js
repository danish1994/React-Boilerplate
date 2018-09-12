import {Component} from "react";
import logo from "../logo.svg";
import React from "react";

class AppComponent extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Intro
                </p>
            </div>
        );
    }
}

export default AppComponent