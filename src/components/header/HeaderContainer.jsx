import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthData } from "../../redux/authReducer";
import { api } from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        api.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    this.props.setAuthData(login, id, email);
                }
            });
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

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
