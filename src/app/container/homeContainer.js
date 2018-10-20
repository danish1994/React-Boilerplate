import Home from "../screen/home";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {decrement, increment, reset} from "../store/ui/action";

const mapStateToProps = (state) => {
    const {ui} = state;
    const {count} = ui;
    return {count};
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        },
        reset: () => {
            dispatch(reset());
        }
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));