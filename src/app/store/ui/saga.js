import {takeEvery, takeLatest} from 'redux-saga/effects';
import {DECREMENT, INCREMENT} from "./action";

function* incrementCounter(action) {
    console.log(action);
}

function* decrementCounter(action) {
    console.log(action);
}

// use them in parallel
export default function* rootSaga() {
    yield takeLatest(INCREMENT, incrementCounter);
    yield takeLatest(DECREMENT, decrementCounter);
}