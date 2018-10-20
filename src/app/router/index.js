import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Home from "../container/homeContainer";
import AboutUs from "../screen/aboutUs";

export default  () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={AboutUs}/>
        </div>
    </Router>
);

