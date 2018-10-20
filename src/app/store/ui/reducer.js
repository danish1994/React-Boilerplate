import {DECREMENT, INCREMENT, RESET} from "./action";

const initialState = {
    count: 0
};


var counter = function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                count: state.count + 1
            };
        }
        case DECREMENT: {
            return {
                ...state,
                count: state.count - 1
            };
        }
        case RESET: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default counter;