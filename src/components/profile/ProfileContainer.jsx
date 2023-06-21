import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Pfofile";
import { getUserData, sendStatusToServer, 
    uploadNewPhoto, updateProfileData } from "../../redux/profilePageReducer";


const ProfileContainer = ({ profile, getUserData, updateProfileData, sendStatusToServer, 
    status, autorizedID, uploadNewPhoto }) => {

    let isOwner = false;
    let { userId } = useParams();

    useEffect(() => {
        if (userId) {
            getUserData(userId);
        }
    }, [userId])

    if (!userId) {
        userId = autorizedID;
        isOwner = true;
    }

    return (
        <Profile profile={profile} sendStatusToServer={sendStatusToServer}
            status={status} uploadNewPhoto={uploadNewPhoto} isOwner={isOwner}
            updateProfileData={updateProfileData} />
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedID: state.auth.id,
    }
}
export default connect(mapStateToProps,
    { getUserData, sendStatusToServer, uploadNewPhoto, updateProfileData })(ProfileContainer);



