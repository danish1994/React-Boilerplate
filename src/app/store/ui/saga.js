import {takeEvery, takeLatest} from 'redux-saga/effects';
import {DECREMENT, INCREMENT} from "./action";

import {GET} from '../../service/API';

function* incrementCounter(action) {
    let data = yield GET('posts');
    console.log(data);

}

function* decrementCounter(action) {
    console.log(action);
}

// use them in parallel
export default function* rootSaga() {
    yield takeLatest(INCREMENT, incrementCounter);
    yield takeLatest(DECREMENT, decrementCounter);
}