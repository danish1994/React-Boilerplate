import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import uiModule from './ui';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        ui: uiModule.reducer
    }), compose(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(logger),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(uiModule.saga);

export default store;
