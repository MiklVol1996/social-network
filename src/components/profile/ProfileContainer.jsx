import { connect } from "react-redux";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Profile from "./Pfofile";
import { getUserData, sendStatusToServer } from "../../redux/profilePageReducer";


const ProfileContainer = ({ profile, getUserData,
    sendStatusToServer, status, autorizedID }) => {
debugger
    let { userId } = useParams();

    useEffect(() => {
        if (userId) {
            getUserData(userId);
        }
    }, [userId])

    if (!userId) {
        userId = autorizedID;
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
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, { getUserData, sendStatusToServer })(ProfileContainer);



