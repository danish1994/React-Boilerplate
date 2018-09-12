import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import AppComponent from './app';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppComponent/>
            </Provider>
        );
    }
}

export default App;
