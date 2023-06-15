import { connect } from "react-redux";
import { getProfile } from "../../redux/profilePageReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Pfofile";
import WithAuthRedirect from "../../hok/withAuthRedirect";
import { compose } from "redux";
import { getStatus, sendStatusToServer } from "../../redux/profilePageReducer";


const ProfileContainer = ({ profile, getProfile, getStatus,
    sendStatusToServer, status }) => {

    let { userId } = useParams();

    if (!userId) {
        userId = '29133';
    }
    useEffect(() => {
        getStatus(userId);
        getProfile(userId);

    }, [userId])

    return (
        <Profile profile={profile} sendStatusToServer={sendStatusToServer}
            status={status} id={userId} />
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}
export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, { getProfile, getStatus, sendStatusToServer })
)(ProfileContainer);



