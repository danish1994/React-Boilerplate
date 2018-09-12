import {createStore, combineReducers} from 'redux'
import uiModule from './ui'

const store = createStore(combineReducers({
    ui: uiModule.reducer
}))

store.subscribe(() =>
    console.log(store.getState())
);

export default store;