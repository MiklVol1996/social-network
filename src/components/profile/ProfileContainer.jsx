import { connect } from "react-redux";
import { getProfile } from "../../redux/profilePageReducer";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Profile from "./Pfofile";
import WithAuthRedirect from "../../hok/withAuthRedirect";
import { compose } from "redux";
import { getStatus, sendStatusToServer } from "../../redux/profilePageReducer";


const ProfileContainer = ({ profile, getProfile, getStatus,
    sendStatusToServer, status, autorizedID, isAuth }) => {

    let { userId } = useParams();

    useEffect(() => {
        getStatus(userId);
        getProfile(userId);
    }, [userId])

    if (!isAuth) {
        return <Navigate to='/login'/>
    }else{
        if(!userId){
            userId = autorizedID;
        }
    }

    return (
        <Profile profile={profile} sendStatusToServer={sendStatusToServer}
            status={status} id={userId} />
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedID: state.auth.id,
    }
}
export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, { getProfile, getStatus, sendStatusToServer })
)(ProfileContainer);



