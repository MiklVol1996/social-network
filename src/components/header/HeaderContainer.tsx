import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import { AppStateType } from "../../redux/store";


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        login: state.auth.login,
    }
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps, { logout })(Header);

type MapStateType = {
    login: string | null,
}

type MapDispatchType = {
    logout: () => void,
}
