import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authMe } from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.authMe();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, { authMe })(HeaderContainer);