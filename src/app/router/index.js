import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from "../screen/home";
import AboutUs from "../screen/aboutUs";


export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/aboutUs" component={AboutUs}/>
        </div>
    </Router>
);