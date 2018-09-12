import {createStore, combineReducers} from 'redux';
import uiModule from './ui';

const store = createStore(combineReducers({
        ui: uiModule.reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() =>
    console.log(store.getState())
);

export default store;