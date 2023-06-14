import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
    }
}

const WithAuthRedirect = (Component) => {
    const redirectComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to='/login' />
        }
        return <Component {...props} />
    }
    return connect(mapStateToProps)(redirectComponent);
}

export default WithAuthRedirect;

 