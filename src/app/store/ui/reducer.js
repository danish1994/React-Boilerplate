import {INCREMENT} from "./action";

const initialState = {
    count: 0
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
}