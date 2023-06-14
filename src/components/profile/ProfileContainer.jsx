import { connect } from "react-redux";
import { getProfile } from "../../redux/profilePageReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Pfofile";
import WithAuthRedirect from "../../hok/withAuthRedirect";
import { compose } from "redux";


const ProfileContainer = ({ profile, getProfile }) => {

    let { userId } = useParams();

    if (!userId) {
        userId = '2';
    }
    useEffect(() => {
        getProfile(userId);
    }, [userId])

    return (
        <Profile profile={profile} />
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, { getProfile })
)(ProfileContainer);



