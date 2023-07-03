import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Pfofile";
import { getUserData, sendStatusToServer, 
     updateProfileData, uploadNewPhoto } from "../../redux/profilePageReducer";
import { AppStateType } from "../../redux/store";
import { ProfileType } from "../../types/types";

type Props = {
    profile: ProfileType | null, 
    getUserData: (id: number) => void, 
    updateProfileData: () => void, 
    sendStatusToServer: (text: string) => void, 
    status: string | null, 
    autorizedID: number | null, 
    uploadNewPhoto: (data: any) => void,
}

const ProfileContainer: React.FC<Props> = ({ profile, getUserData, updateProfileData, sendStatusToServer, 
    status, autorizedID, uploadNewPhoto }) => {

    let isOwner = false;
    let { userId } = useParams();

    useEffect(() => {
        if (userId) {
            getUserData(+userId);
        }
    }, [userId])

    if (!userId) {
        userId = String(autorizedID);
        isOwner = true;
    }

    return (
        <Profile profile={profile} sendStatusToServer={sendStatusToServer}
            status={status} uploadNewPhoto={uploadNewPhoto} isOwner={isOwner}
            updateProfileData={updateProfileData} />
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedID: state.auth.id,
    }
}

export default connect<MapStateType, MapDispatchType, {}, AppStateType>(mapStateToProps,
    { getUserData, sendStatusToServer, uploadNewPhoto, updateProfileData })(ProfileContainer);

type MapStateType = {
    profile: ProfileType | null,
    status: string| null,
    autorizedID: number| null,
}

type MapDispatchType = {
    getUserData: (id: number) => void, 
    sendStatusToServer: (text: string) => void, 
    uploadNewPhoto: (data: any) => void, 
    updateProfileData: () => void,
} 



