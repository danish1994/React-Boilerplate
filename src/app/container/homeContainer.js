import Home from "../screen/home";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (dispatch) => {

};


export default withRouter(connect(mapStateToProps)(Home));